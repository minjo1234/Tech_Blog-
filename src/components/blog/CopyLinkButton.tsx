'use client';

import { useState } from 'react';

export function CopyLinkButton() {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = async () => {
    try {
      // 현재 URL 가져오기
      const currentUrl = window.location.href;

      // 클립보드에 복사
      await navigator.clipboard.writeText(currentUrl);

      // 복사 완료 피드백
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy link:', error);
    }
  };

  return (
    <button
      onClick={handleCopyLink}
      className="px-6 py-3 bg-neutral-900 text-white transition-all font-bold relative overflow-hidden group"
      style={{ backgroundColor: copied ? '#a4ac86' : '#0f0f0f' }}
      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#a4ac86'}
      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = copied ? '#a4ac86' : '#0f0f0f'}
    >
      {copied ? (
        <span className="flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          Copied!
        </span>
      ) : (
        <span className="flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
          Copy Link
        </span>
      )}
    </button>
  );
}
