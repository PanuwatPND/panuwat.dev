"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { routing } from "@/i18n/routing";
import { useState } from "react";
import { ChevronDown, Check } from "lucide-react";

const flags: Record<string, string> = {
  en: "🇬🇧",
  th: "🇹🇭",
};

const labels: Record<string, string> = {
  en: "EN",
  th: "ไทย",
};

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath);
    setOpen(false);
  };

  return (
    <div className="relative inline-block text-center">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 px-2 py-1 "
      >
        <span className="text-2xl">{flags[locale]}</span>
        <ChevronDown className="w-5 h-5" />
      </button>

      {open && (
        <div className="absolute z-10 mt-2 min-w-[8rem] max-w-[90vw] bg-white rounded-md shadow-lg cursor-pointer right-0">
          {routing.locales.map((loc) => (
            <button
              key={loc}
              onClick={() => switchLocale(loc)}
              className={`flex w-full cursor-pointer rounded-md items-center gap-2 px-3 text-sm hover:bg-gray-100 ${
                loc === locale ? "font-semibold " : ""
              }`}
            >
              <span className="text-2xl">{flags[loc]}</span>
              <span className="flex-1 text-left">{labels[loc]}</span>
              {loc === locale && <Check className="w-4 h-4 text-green-500" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
