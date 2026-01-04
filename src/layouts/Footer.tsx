'use client'

import Link from "next/link";
import IconGithub from "@/components/icon/Github";
import IconLinkedin from "@/components/icon/LinkedIn";

export const Footer = () => {
    return (
        <footer className='mb-16 mt-20 flex flex-col items-center gap-4 text-center print:hidden'>
            <div className='flex justify-center gap-4'>
                <Link href='https://github.com/minjo1234' target='_blank'>
                    <IconGithub
                        className='fill-neutral-700 transition'
                        style={{ fillOpacity: 0.7 }}
                        onMouseEnter={(e: { currentTarget: { style: { fill: string; }; }; }) => e.currentTarget.style.fill = '#a4ac86'}
                        onMouseLeave={(e: { currentTarget: { style: { fill: string; }; }; }) => e.currentTarget.style.fill = '#404040'}
                        height={30}
                        width={30}></IconGithub>
                </Link>
                <Link href='https://www.linkedin.com/in/min-jo-3b2398357/' target='_blank'>
                    <IconLinkedin
                        className='fill-neutral-700 transition'
                        style={{ fillOpacity: 0.7 }}
                        onMouseEnter={(e) => e.currentTarget.style.fill = '#a4ac86'}
                        onMouseLeave={(e) => e.currentTarget.style.fill = '#404040'}
                        height={30}
                        width={30}>
                    </IconLinkedin>
                </Link>
            </div>
            <div className='text-neutral-600'>
                © 2025. <span className='font-semibold text-neutral-900'>Min Jo</span> all rights reserved.
            </div>
        </footer>
    )
}
