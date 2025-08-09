"use client";

import { useThemeStore, type ThemeName } from "@/lib/theme";
import {
  SiBitcoin,
  SiEthereum,
  SiBinance,
  SiSolana,
  SiChainlink,
} from "react-icons/si";

const options: {
  key: ThemeName;
  label: string;
  Icon: React.ComponentType<{ size?: number }>;
}[] = [
  { key: "ethereum", label: "Ethereum", Icon: SiEthereum },
  { key: "bitcoin", label: "Bitcoin", Icon: SiBitcoin },
  { key: "binance", label: "Binance", Icon: SiBinance },
  { key: "solana", label: "Solana", Icon: SiSolana },
  { key: "chainlink", label: "Chainlink", Icon: SiChainlink },
  // Tron icon not available in current react-icons build; omit for now
];

export default function ThemeSwitcher() {
  const theme = useThemeStore((s) => s.theme);
  const setTheme = useThemeStore((s) => s.setTheme);

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-10 flex gap-2 rounded-full border accent-border bg-white/70 backdrop-blur px-2 py-1 cursor-pointer">
      {options.map(({ key, label, Icon }) => (
        <button
          key={key}
          aria-label={`Switch theme to ${label}`}
          onClick={() => setTheme(key)}
          className={`rounded-full p-2 transition-transform cursor-pointer ${
            theme === key ? "scale-110 accent-btn" : "hover:scale-105"
          }`}
          title={label}>
          <Icon size={18} />
        </button>
      ))}
    </div>
  );
}
