import { client } from "./httpClient";
import { Query } from "@/types/global.type";
import { Item } from "@/types/item.type";

export const getItems = (): Promise<Item[]> => {
  return client({
    method: "GET",
    url: "/items",
    // params: query
  });
};

export const createItems = (query: Query) => {
  return client({
    method: "POST",
    url: "https://fakestoreapi.com/products",
    params: query,
  });
};
