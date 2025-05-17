// src/app/items/page.tsx
"use client";

import useItems from "@/hooks/useItems";
import ImageWrapper from "@/components/ImageWrapper";

const ItemsPage = () => {
  const { items, loading, error } = useItems();

  if (loading) {
    return (
      <div className="text-center text-gray-600 animate-pulse">
        Loading products...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500">
        Failed to load items: {error.message}
      </div>
    );
  }

  if (items.length === 0) {
    return <div className="text-center text-red-500">No products found.</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Items</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {items.map((item) => (
          <div key={item.id} className="border p-4 rounded shadow-sm">
            <div className="relative w-full h-32 mb-2">
              <ImageWrapper src={item.image} alt="Image" />
            </div>
            <div className="font-semibold">{item.title}</div>
            <div className="text-gray-500">{item.type} ฿</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemsPage;
