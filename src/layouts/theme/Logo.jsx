import {useTheme} from "next-themes";
import {useEffect, useState} from "react";
import Link from "next/link";
import Image from "next/image";

export default function Logo(){
    const {theme } = useTheme()
    const [ mounted, setMounted ] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, []);

    if(!mounted) {
        return null;
    }

    const logoSrc = theme === 'dark' ? '/images/logo_dark.svg' : '/images/logo_white.svg';

    return (
        <div className='flex font-medium'>
            <Link href="/">
                <Image
                    src={logoSrc}
                    alt="Minlog Logo"
                    width={160}
                    height={40}
                    priority
                />
            </Link>
        </div>
    )
}
