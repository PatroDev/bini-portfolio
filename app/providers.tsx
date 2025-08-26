"use client";

import { ReactNode } from "react";
import { LanguageProvider } from "@/hooks/use-language";

export function Providers({ children }: { children: ReactNode }): JSX.Element {
  return <LanguageProvider>{children}</LanguageProvider>;
}
