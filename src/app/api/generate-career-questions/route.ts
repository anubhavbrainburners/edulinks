// app/api/generate-career-questions/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { profileData } = await request.json();

    const countryLabel = profileData.country;
    const educationLabel = profileData.education;
    const interestLabels = Array.isArray(profileData.interests) ? profileData.interests : [];
    const workStyleLabel = profileData.workStyle;

    const prompt = `You are a psychometric test expert. Based on the following user information, generate 15 multiple-choice questions to assess the user's personality, interest alignment, and work preferences. Each question must have 4 options and be suitable for guiding career recommendations.

User Info:
- Preferred Country: ${countryLabel}
- Education Level/Background: ${educationLabel}
- Interest Areas: ${interestLabels.join(", ")}
- Work Style: ${workStyleLabel}

Instructions:
- Questions must be scenario-based, behavioral, and career-relevant.
- Vary the questions across personality, aptitude, and interest-based themes.
- Ensure neutrality and clarity. No repeated formats.
- Output must be a JSON object with a "questions" array.

Output Format:
{
  "questions": [
    {
      "question": "Your ideal weekend would involve...",
      "options": [
        "Building a passion project or code",
        "Volunteering or helping people", 
        "Exploring museums or art galleries",
        "Traveling and discovering new places"
      ]
    }
  ]
}`;

    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: "You are a career counseling expert who creates personalized career assessment questions. Always respond with valid JSON.",
          },
          { role: "user", content: prompt },
        ],
        max_tokens: 2000,
        temperature: 0.7,
        response_format: { type: "json_object" },
      }),
    });

    if (!res.ok) {
      throw new Error(`OpenAI API failed with status ${res.status}`);
    }

    const data = await res.json();
    const content = data.choices[0].message.content;
    const result = JSON.parse(content);

    return NextResponse.json(result);
  } catch (error) {
    console.error("Error in career questions API:", error);
    return NextResponse.json(
      { error: "Failed to generate questions" },
      { status: 500 }
    );
  }
}