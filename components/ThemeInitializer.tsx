"use client";

import { useEffect } from "react";
import { initializeTheme } from "@/lib/theme";

export default function ThemeInitializer() {
  useEffect(() => {
    initializeTheme();
  }, []);
  return null;
}
