"use client";

import { useEffect, useState } from "react";
import service from "@/services";
import { Item } from "@/types/item.type";
import ImageWrapper from "@/components/ImageWrapper";
import StateWrapper from "@/components/StateWrapper";

const ItemsPage = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchItems = async () => {
    setLoading(true);
    setError(false);
    try {
      const resp = await service.item.getItems();
      console.log("Fetched items:", resp);

      setItems(resp);
    } catch (error) {
      console.error("Failed to fetch products:", error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (

    <>
      <StateWrapper
        isLoading={loading}
        isError={error}
        skeleton={items.length}
        data={
          items.length === 0 ? (
            <div className="text-center text-gray-400 italic">
              No items found in project structure.
            </div>
          ) : (
            <div>
              <h1 className="text-2xl font-bold mb-6 text-gray-800">
                📁 Next.js Project Structure
              </h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="border rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="relative w-full h-32 mb-4">
                      <ImageWrapper src={item.image} alt={item.title} />
                    </div>
                    <div className="font-semibold text-lg text-gray-800">
                      {item.title}
                    </div>
                    <div className="text-sm text-gray-500 capitalize">
                      Type: {item.type}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        }
      />
    </>
  );
};

export default ItemsPage;
