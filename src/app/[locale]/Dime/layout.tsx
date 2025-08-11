import type { ReactNode } from "react";

export default function DimeLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="th">
      <body className="bg-gray-50 text-gray-800">
        <header className="bg-blue-700 text-white p-4 shadow">
          <h1 className="text-xl font-semibold">Dime Dashboard</h1>
        </header>
        <main className="max-w-4xl mx-auto p-6">{children}</main>
      </body>
    </html>
  );
}
