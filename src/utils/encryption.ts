// utils/encryption.ts
const ENCRYPTION_KEY = process.env.NEXT_PUBLIC_ENCRYPTION_KEY || 'career-pathway-secret-key';

export const encryptData = (data: any): string => {
  try {
    const jsonString = JSON.stringify(data);
    const encoded = btoa(unescape(encodeURIComponent(jsonString)));
    return encoded;
  } catch (error) {
    console.error('Encryption error:', error);
    return '';
  }
};

export const decryptData = (encrypted: string): any => {
  try {
    const decoded = decodeURIComponent(escape(atob(encrypted)));
    return JSON.parse(decoded);
  } catch (error) {
    console.error('Decryption error:', error);
    return null;
  }
};

export const buildCareerParams = (data: any): string => {
  const encrypted = encryptData(data);
  return `career=${encodeURIComponent(encrypted)}`;
};

export const parseCareerParams = (searchParams: URLSearchParams): any => {
  const careerParam = searchParams.get('career');
  if (!careerParam) return null;
  
  const decoded = decodeURIComponent(careerParam);
  return decryptData(decoded);
};