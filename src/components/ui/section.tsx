import React from "react";
import {cn} from "@/lib/utils";

export type SectionProps = React.HTMLAttributes<HTMLElement>;
export function Section({className, ...props}: Readonly<SectionProps>) {
    return <section className={cn('flex min-h-0 flex-col gap-y-3 w-full print:space-y-4', className)}{...props}></section>
}
