export interface DecodedToken {
  sub: string;
  exp: number;
  iat: number;
  nickname?: string;
  email?: string;
  role?: 'user';
}

export const parseJwt = (token: string): DecodedToken | null => {
  try {
    const payload = token.split('.')[1];
    const decoded = atob(payload);
    return JSON.parse(decoded) as DecodedToken;
  } catch {
    return null;
  }
};