import jwt_decode from "jwt-decode";

export interface AuthPayload {
  exp: number;
  iat: number;
  id: number;
}

export const decodedToken = (): AuthPayload | undefined => {
  const token = localStorage.getItem("token");
  if (!token) return;

  const decoded = jwt_decode<AuthPayload>(token);
  const currentTime = new Date().getTime();

  const isExpired = currentTime - decoded.exp <= 0;

  if (isExpired) {
    localStorage.removeItem("token");
    return undefined;
  }

  return decoded;
};