'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Languages } from 'lucide-react';

export default function LanguageSwitch() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <Button
      onClick={toggleLanguage}
      variant="ghost"
      size="icon"
      className="ml-2 transition-colors relative hover:text-[#a4ac86]"
      aria-label="Toggle language"
    >
      <Languages className="size-5" />
      <span className="absolute -bottom-1 -right-1 text-[10px] font-bold uppercase text-white px-1 rounded" style={{ backgroundColor: '#a4ac86' }}>
        {language}
      </span>
    </Button>
  );
}
