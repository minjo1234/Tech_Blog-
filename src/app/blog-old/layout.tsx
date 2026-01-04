import React from "react";

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <section className='mx-auto'>{children}</section>
}
