'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="group relative px-6 py-2 bg-neutral-900 text-white transition-all duration-300 font-bold font-mono text-sm border-2 border-transparent hover:border-[#a4ac86] overflow-hidden"
      style={{ backgroundColor: '#0f0f0f' }}
      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#a4ac86'}
      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#0f0f0f'}
      aria-label="Toggle language"
    >
      {/* Background Animation */}
      <span className="absolute inset-0 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 -z-10" style={{ backgroundColor: '#a4ac86' }} />

      {/* Icon and Text */}
      <span className="relative flex items-center gap-2">
        {/* Globe Icon */}
        <svg
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
          />
        </svg>

        {/* Language Display */}
        <span className="flex items-center gap-1">
          <span className={language === 'ko' ? 'font-black' : 'opacity-50'}>KO</span>
          <span>/</span>
          <span className={language === 'en' ? 'font-black' : 'opacity-50'}>EN</span>
        </span>
      </span>
    </button>
  );
}
