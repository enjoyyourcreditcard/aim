'use client';

import Link from "next/link";
import clsx from 'clsx';
import { usePathname } from "next/navigation";

function NavSide() {
    const pathname = usePathname();

    return (
        <div className="h-screen w-full p-7 bg-black border-r border-neutral-700" >
            <div className="border-b border-neutral-700 mb-2 pb-2">
                <a className="font-mono">Master</a>
            </div>
            <div className="flex flex-col gap-2 border-b border-neutral-700 mb-2 pb-2">
                <div>
                    <Link
                        href="/category"
                        className={
                            clsx(
                                "font-mono",
                                {
                                    "text-blue-500": pathname === '/category',
                                    "opacity-50": pathname !== '/category'
                                }
                            )
                        }
                    >
                        Category
                    </Link>
                </div>
                <div>
                    <Link
                        href="/segment"
                        className={
                            clsx(
                                "font-mono",
                                {
                                    "text-blue-500": pathname === '/segment',
                                    "opacity-50": pathname !== '/segment'
                                }
                            )
                        }
                    >
                        Segment
                    </Link>
                </div>
                <div>
                    <a className="font-mono opacity-50">Brand</a>
                </div>
                <div>
                    <a className="font-mono opacity-50">Part</a>
                </div>
            </div>
            <div className="border-b border-neutral-700 mb-2 pb-2">
                <a className="font-mono">Other</a>
            </div>
            <div className="border-b border-neutral-700 mb-2 pb-2">
                <a className="font-mono">Something really really long</a>
            </div>
        </div>
    );
}

export default NavSide;