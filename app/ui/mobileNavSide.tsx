'use client';

import clsx from 'clsx';
import Link from "next/link";
import { useState } from "react";
import { TypeLink } from '../lib/definitions';
import { usePathname } from "next/navigation";

function MobileSideNav({ links }: { links: TypeLink[] }) {
    const [isOpen, setIsOpen] = useState(true);
    const [isOpenStyle, setIsOpenStyle] = useState(true);
    const pathname = usePathname();

    function closeSideNav() {
        const timeout = 100;
        setTimeout(() => setIsOpen(false), timeout);
        setIsOpenStyle(false);
    }

    function openSideNav() {
        const timeout = 100;
        setTimeout(() => setIsOpenStyle(true), timeout);
        setIsOpen(true);
    }

    return (
        <>
            <button className="flex flex-col gap-2" onClick={openSideNav}>
                <span className="w-5 border-b border-white"></span>
                <span className="w-5 border-b border-white"></span>
                <span className="w-5 border-b border-white"></span>
            </button>
            {
                isOpen &&
                <div
                    className={clsx("h-screen w-screen absolute md:static md:w-full top-0 z-50 transition-colors", {
                        "bg-transparent": !isOpenStyle,
                        "bg-black/50": isOpenStyle
                    })}
                    onClick={closeSideNav}
                >
                    <div
                        className={clsx("h-screen w-9/12 md:w-full p-7 bg-black border-r border-neutral-700 transition-transform", {
                            "-translate-x-full": !isOpenStyle,
                            "translate-x-0": isOpenStyle
                        })}
                        onClick={(e) =>  e.stopPropagation()}
                    >
                        {
                            links.map((link: TypeLink) => (
                                <div key={link.href}>
                                    <div
                                        className="border-b border-neutral-700 mb-2 pb-2"
                                    >
                                        {
                                            link.href !== ``
                                            ?
                                            <Link
                                                href={link.href}
                                                className="font-mono"
                                            >
                                                { link.name }
                                            </Link>
                                            :
                                            <a
                                                className="font-mono"
                                            >
                                                { link.name }
                                            </a>
                                        }
                                    </div>
                                    {
                                        link.children !== undefined &&
                                        <div className="flex flex-col gap-2 border-b border-neutral-700 mb-2 pb-2">
                                            {
                                                link.children.map((childLink: {name: string, href: string}) => (
                                                    <div key={childLink.href}>
                                                        <Link
                                                            href={ childLink.href }
                                                            className={
                                                                clsx(
                                                                    "font-mono",
                                                                    {
                                                                        "text-blue-500": pathname === childLink.href,
                                                                        "opacity-50": pathname !== childLink.href
                                                                    }
                                                                )
                                                            }
                                                        >
                                                            { childLink.name }
                                                        </Link>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    }
                                </div>
                            ))
                        }
                    </div>
                </div>
            }
        </>
    );
}

export default MobileSideNav;