import { getCookie } from "@/libs/cookies/getCookie";
import axios, { AxiosRequestConfig, AxiosError } from "axios";
import { isClient } from "@/libs/utils/isClient";

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

const api = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    if (isClient()) {
      const token = getCookie("token");
      if (token && config.headers && typeof config.headers.set === "function") {
        config.headers.set("Authorization", `Bearer ${token}`);
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const client = async <T = unknown>(
  config: AxiosRequestConfig
): Promise<T> => {
  try {
    const response = await api(config);
    return response.data;
  } catch (error) {
    const err = error as AxiosError;
    console.error("HTTP Error:", {
      message: err.message,
      status: err.response?.status ?? "No response",
      data: err.response?.data ?? "No data",
    });

    throw err;
  }
};
