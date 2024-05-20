'use client'

import { FiSun, FiMoon } from "react-icons/fi"
import React, {useEffect} from "react";
import {useTheme} from "next-themes";
import Image from "next/image"
import {FaMoon, FaSun} from "react-icons/fa6";

export default function ThemeSwitch(){
    const [mounted, setMounted] = React.useState(false);
    const { setTheme, resolvedTheme } = useTheme()

    useEffect(() => setMounted(true), []);

    if (!mounted) return (
        <Image
            src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
            width={36}
            height={36}
            sizes="36x36"
            alt="Loading Light/Dark Toggle"
            priority={false}
            title="Loading Light/Dark Toggle"
        />
    )

    if (resolvedTheme === 'dark') {
        return <FaSun onClick={() => setTheme('light')} className="text-xl cursor-pointer"/>
    }

    if (resolvedTheme === 'light') {
        return <FaMoon onClick={() => setTheme('dark')} className="text-xl cursor-pointer" />
    }
}