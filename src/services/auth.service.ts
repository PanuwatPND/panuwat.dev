import { client } from "./httpClient";

export const login = (data: { email: string; password: string }) => {
  return client({
    url: "/auth/login",
    method: "POST",
    data,
  });
};

export const logout = () => {
  return client({
    url: "/auth/logout",
    method: "POST",
  });
};
