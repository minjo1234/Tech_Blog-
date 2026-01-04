'use client';

import { createContext, useContext, useState, useEffect, ReactNode, useMemo, useCallback } from 'react';

type Language = 'ko' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Cookie helper functions
function setCookie(name: string, value: string, days: number = 365) {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

function getCookie(name: string): string | null {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift() || null;
  return null;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('ko');

  // Initialize language from cookie or localStorage on mount
  useEffect(() => {
    const cookieLang = getCookie('language') as Language;
    const localLang = localStorage.getItem('language') as Language;
    const savedLanguage = cookieLang || localLang;

    if (savedLanguage === 'ko' || savedLanguage === 'en') {
      setLanguageState(savedLanguage);
    }
  }, []);

  // Save language to both localStorage and cookie whenever it changes
  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
    setCookie('language', lang);
    // Trigger page reload to update server components
    globalThis.location.reload();
  }, []);

  // Toggle between ko and en
  const toggleLanguage = useCallback(() => {
    const newLang = language === 'ko' ? 'en' : 'ko';
    setLanguage(newLang);
  }, [language, setLanguage]);

  // Memoize context value to prevent unnecessary re-renders
  const value = useMemo(
    () => ({ language, setLanguage, toggleLanguage }),
    [language, setLanguage, toggleLanguage]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

// Custom hook to use the language context
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
