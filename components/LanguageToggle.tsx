'use client';

import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/use-language';
import { Globe } from 'lucide-react';
import Image from "next/image";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
      className="flex items-center gap-2 glass-effect border-orange-200 hover:bg-orange-50 hover:border-orange-300 transition-all duration-300 hover-lift"
    >
      {/* <Globe className="w-4 h-4" /> */}
      
      <img
        src={language === 'fr' ? '/flags/fr.svg' : '/flags/gb.svg'}
        alt={language === 'fr' ? 'Français' : 'English'}
        title={language === 'fr' ? 'Français' : 'English'}
        className="h-5 w-5 rounded-full shadow ring-1 ring-gray-300 dark:ring-gray-600 bg-white/20 backdrop-blur-md transition-transform duration-300 ease-in-out"
      />
      {/* <span className="font-medium">{language === 'fr' ? 'EN' : 'FR'}</span> */}
    </Button>
  );
}