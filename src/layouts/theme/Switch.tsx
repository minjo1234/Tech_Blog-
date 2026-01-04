
import {useEffect, useState} from "react";
import {Dot, LucideIcon, Monitor, Moon, Sun} from "lucide-react";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@radix-ui/react-dropdown-menu";
import {useTheme} from "next-themes";
import {cn} from "@/lib/utils";

interface DropdownItemProps  {
    t: string,
    label: string,
    Icon: LucideIcon,
}

const themeItems: DropdownItemProps[] = [
    {t: 'light', label: 'Light', Icon: Sun},
    {t: 'dark', label: 'Dark', Icon: Moon},
    {t: 'system', label: 'System', Icon: Monitor},
]

const ThemeSwitch = () => {
    // Theme switch disabled - light mode only
    return null;

    const Item = ({t, label, Icon}: DropdownItemProps) => {
        return (
            <DropdownMenuItem onClick={() => setTheme(t)} className='justify-between'>
                <div className="flex items-center gap-2">
                    <Icon/> {label}
                </div>
                {theme === t && <Dot />}
            </DropdownMenuItem>
        )
    }


    return (
        <div
            className="relative flex w-16 h-8 p-1 rounded-full cursor-pointer transition-all duration-300 border bg-zinc-200 border-zinc-300 dark:bg-zinc-950 dark:border-zinc-800"
            role="button">
            <div className="flex justify-between items-center w-full">
                <div
                    onClick={() => setTheme('dark')}
                    className={cn(
                        "flex justify-center items-center w-6 h-6 rounded-full transition-all duration-300 cursor-pointer",
                        theme === 'dark'
                            ? "bg-zinc-800 text-white dark:bg-zinc-800 dark:text-white"
                            : "bg-transparent text-zinc-400 dark:bg-transparent dark:text-zinc-400"
                    )}>
                    <Moon className="size-4"/>
                </div>
                <div
                    onClick={() => setTheme('light')}
                    className={cn(
                        "flex justify-center items-center w-6 h-6 rounded-full transition-all duration-300 cursor-pointer",
                        theme === 'light'
                            ? "bg-white text-zinc-900 dark:bg-white dark:text-zinc-900"
                            : "bg-transparent text-zinc-500 dark:bg-transparent dark:text-zinc-500"
                    )}>
                    <Sun className="size-4"/>
                </div>
            </div>
        </div>
    )
}


export default ThemeSwitch;
