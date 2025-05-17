// src/hooks/useItems.ts
import { useEffect, useState } from "react";
import service from "@/services";
import { Item } from "@/types/item.type";

const useItems = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      try {
        const resp = await service.item.getItems();
        setItems(resp);
      } catch (err) {
        console.error("Fetch error:", err);
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  return { items, loading, error };
};

export default useItems;