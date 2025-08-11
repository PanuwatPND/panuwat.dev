// src/app/[locale]/Dime/page.tsx
"use client";
import { useState } from "react";

export default function DimeDashboard() {
  const [amountTHB, setAmountTHB] = useState(100000);
  const [exchangeRate, setExchangeRate] = useState<number | null>(null);
  const [converted, setConverted] = useState<number | null>(null);

  const convert = async () => {
    const res = await fetch(
      "https://api.exchangerate.host/latest?base=THB&symbols=USD"
    );
    const data = await res.json();
    const rate = data.rates.USD;
    setExchangeRate(rate);
    setConverted(amountTHB * rate);
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">แปลงเงินตามอัตราแลกเปลี่ยน</h1>

      <input
        type="number"
        className="border p-2 rounded w-full max-w-md"
        value={amountTHB}
        onChange={(e) => setAmountTHB(Number(e.target.value))}
      />

      <button
        onClick={convert}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
      >
        แปลงเป็น USD
      </button>

      {converted && (
        <div className="mt-4 text-lg">
          {amountTHB.toLocaleString()} THB ≈{" "}
          <span className="font-bold">{converted.toFixed(2)} USD</span> @ rate{" "}
          {exchangeRate}
        </div>
      )}
    </div>
  );
}
