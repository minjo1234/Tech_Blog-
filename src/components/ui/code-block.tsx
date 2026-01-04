'use client'

import { useState } from 'react'
import { Check, Copy } from 'lucide-react'

interface CodeBlockProps {
    children: React.ReactNode
    raw?: string
    title?: string
    language?: string
}

export function CodeBlock({ children, raw, title, language }: CodeBlockProps) {
    const [copied, setCopied] = useState(false)

    const handleCopy = async () => {
        if (!raw) return

        await navigator.clipboard.writeText(raw)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <div className="group relative my-6 rounded-lg border ">
            {/* 파일명 또는 언어 표시 */}
            {(title || language) && (
                <div className="flex items-center justify-between border-b border-zinc-800 px-4 py-2 text-sm">
                    <span className="font-mono text-zinc-400">
                        {title || language}
                    </span>

                    <button
                        onClick={handleCopy}
                        className="rounded-md p-2"
                        aria-label="코드 복사"
                    >
                        {copied ? (
                            <Check className="h-4 w-4 text-green-500" />
                        ) : (
                            <Copy className="h-4 w-4 text-zinc-400" />
                        )}
                    </button>
                </div>
            )}

            <div className="overflow-x-auto">
                <pre className="not-prose p-4 text-sm leading-relaxed">{children}</pre>
            </div>
        </div>
    )
}
