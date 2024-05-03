'use client';

import Link from "next/link";
import clsx from 'clsx';
import { usePathname } from "next/navigation";
import { TypeLink } from '../lib/definitions';

function NavSide({ links }: { links: TypeLink[] }) {
    const pathname = usePathname();

    return (
        <div className="h-screen w-full p-7 bg-black border-r border-neutral-700" >
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
    );
}

export default NavSide;