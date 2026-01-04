'use client';

import {cn} from "@/lib/utils";
import {Github, X} from "lucide-react";
import Link from "next/link";
import LanguageSwitch from "@/components/LanguageSwitch";
import {Button} from "@/components/ui/button";
import {usePathname} from "next/navigation";

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

 function MobileNavBar({isOpen, onClose}: MobileMenuProps) {
    const pathName = usePathname()

    if(!isOpen) return null

    return (
        <div className="fixed inset-0 z-50 sm:hidden">
            <div className={cn(
                "fixed inset-0 flex flex-col bg-white transition-transform duration-300 border-l-4",
                isOpen ? "translate-y-0" : "-translate-y-full"
            )}
            style={{ borderLeftColor: '#a4ac86' }}>
                <div className="flex items-center justify-between p-6 border-b-4" style={{ borderBottomColor: '#a4ac86' }}>
                    <span className="font-display font-black text-2xl uppercase tracking-tight text-neutral-900">Menu</span>
                    <button
                        onClick={onClose}
                        className="p-3 transition-colors hover:text-[#a4ac86]"
                        aria-label="Close menu"
                    >
                        <X className="size-6" />
                    </button>
                </div>

                {/* Bottom Actions */}
                <div className="mt-auto p-6 border-t-4" style={{ borderTopColor: '#a4ac86' }}>
                    <div className="flex items-center gap-4">
                        <LanguageSwitch/>
                        <Button asChild variant='ghost' size='icon' className="transition-colors hover:text-[#a4ac86]">
                            <Link href='https://github.com/minjo1234/' target='_blank'>
                                <Github className='size-[1.2rem]'/>
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {
    MobileNavBar,
}
