import { NextResponse } from "next/server";

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

// 🚨 IMPORTANT:
// Move your key from services/api.js to .env.local like:
// OPENAI_API_KEY="sk-...."

export async function POST(req) {
  try {
    const body = await req.json();

    const {
      testType,
      section,
      difficulty,
      count = 10
    } = body;

    // Build the OpenAI prompt
    const basePrompt = `
You are an expert test-generator. Produce exactly ${count} MULTIPLE-CHOICE QUESTIONS (MCQs) only.
DO NOT generate any passages or reading comprehension texts.
Each question MUST be standalone.

Return ONLY valid JSON:

{
  "questions": [
    {
      "question": "<question>",
      "options": ["A", "B", "C", "D"],
      "correctAnswer": "<one of the options>"
    }
  ]
}

Rules:
- No passages.
- No extra text.
- Options must be exactly 4.
- correctAnswer must match one of the options.
- Difficulty: ${difficulty}
- Test type: ${testType}
- Section: ${section}
`;

    let attempt = 0;
    let lastError = null;

    while (attempt < 3) {
      attempt++;

      try {
        const payload = {
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "system",
              content: "Return valid JSON only."
            },
            {
              role: "user",
              content: basePrompt
            }
          ],
          max_tokens: 1500,
          temperature: 0.3
        };

        const response = await fetch("https://api.openai.com/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${OPENAI_API_KEY}`
          },
          body: JSON.stringify(payload)
        });

        if (!response.ok) {
          const text = await response.text();
          throw new Error(`OpenAI error ${response.status}: ${text}`);
        }

        const data = await response.json();
        const rawContent = data?.choices?.[0]?.message?.content;

        if (!rawContent) throw new Error("Empty OpenAI response");

        // Parse JSON
        let parsed;
        try {
          parsed = JSON.parse(rawContent);
        } catch (e) {
          const match = rawContent.match(/\{[\s\S]*\}$/);
          if (!match) throw new Error("Invalid JSON");
          parsed = JSON.parse(match[0]);
        }

        const questions = parsed.questions || [];

        // Final validation
        const valid = questions.every((q) => {
          return (
            q.question &&
            Array.isArray(q.options) &&
            q.options.length === 4 &&
            q.options.includes(q.correctAnswer)
          );
        });

        if (!valid || questions.length < count) {
          lastError = new Error("Validation failed, retrying...");
          continue;
        }

        return NextResponse.json({ questions });
      } catch (err) {
        lastError = err;
      }
    }

    throw lastError;
  } catch (error) {
    return NextResponse.json(
      { error: error.message || "Failed to generate questions" },
      { status: 500 }
    );
  }
}
