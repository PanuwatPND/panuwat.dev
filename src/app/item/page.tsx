"use client";

import { useEffect, useState } from "react";
import service from "@/services";
import { Item } from "@/types/item.type";
import ImageWrapper from "@/components/ImageWrapper";
import LoadingSpinner from "@/components/LoadingSpinner";

const ItemPage = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);

  const getItem = async () => {
    setLoading(true);
    try {
      const resp = await service.item.getItems();
      console.log("Fetched items:", resp);

      setItems(resp);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getItem();
  }, []);

  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center min-h-[50vh]">
          <LoadingSpinner size="lg" />
        </div>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};

export default ItemPage;
