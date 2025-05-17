import { IncomingMessage } from "http";

export const getServerCookie = (req: IncomingMessage, name: string): string | null => {
  const cookieHeader = req.headers.cookie;
  if (!cookieHeader) return null;

  const cookies = cookieHeader.split("; ");
  const cookie = cookies.find(c => c.startsWith(name + "="));
  return cookie ? decodeURIComponent(cookie.split("=")[1]) : null;
};
