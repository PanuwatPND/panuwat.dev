// hooks/useQuery.ts
import { useState } from "react";
import type { Query } from "@/types/global.type";

export const useQuery = (initial?: Partial<Query>) => {
  const [query, setQuery] = useState<Query>({
    page: 1,
    limit: 10,
    total: 0,
    ...initial,
  });

  const setPage = (page: number) => {
    setQuery((prev) => ({ ...prev, page }));
  };

  const setSearch = (search: string) => {
    setQuery((prev) => ({ ...prev, search, page: 1 }));
  };

  const setTotal = (total: number) => {
    setQuery((prev) => ({ ...prev, total }));
  };

  const totalPages = Math.ceil(query.total / query.limit);

  return {
    query,
    totalPages,
    setPage,
    setSearch,
    setTotal,
  };
};
