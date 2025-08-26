"use client";

import { useState, useEffect, createContext, useContext, ReactNode } from "react";
import { translations, Language, TranslationKey } from "@/lib/translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }): JSX.Element {
  const [language, setLanguage] = useState<Language>("fr");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language | null;
    if (savedLanguage === "fr" || savedLanguage === "en") {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: TranslationKey): string => {
    // Si translations[language][key] peut être optionnel côté types, sécurise:
    return (translations[language]?.[key] ?? key) as string;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}






// 'use client';

// import { useState, useEffect, createContext, useContext } from 'react';
// import { translations, Language, TranslationKey } from '@/lib/translations';

// interface LanguageContextType {
//   language: Language;
//   setLanguage: (lang: Language) => void;
//   t: (key: TranslationKey) => string;
// }

// const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// export function LanguageProvider({ children }: { children: React.ReactNode }) {
//   const [language, setLanguage] = useState<Language>('fr');

//   useEffect(() => {
//     const savedLanguage = localStorage.getItem('language') as Language;
//     if (savedLanguage && (savedLanguage === 'fr' || savedLanguage === 'en')) {
//       setLanguage(savedLanguage);
//     }
//   }, []);

//   const handleSetLanguage = (lang: Language) => {
//     setLanguage(lang);
//     localStorage.setItem('language', lang);
//   };

//   const t = (key: TranslationKey): string => {
//     return translations[language][key] || key;
//   };

//   return (
//     <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
//       {children}
//     </LanguageContext.Provider>
//   );
// } 

// export function useLanguage() {
//   const context = useContext(LanguageContext);
//   if (context === undefined) {
//     throw new Error('useLanguage must be used within a LanguageProvider');
//   }
//   return context;
// }