import Image from "next/image";
import NavSide from "../ui/navSide";
import MobileSideNav from "../ui/mobileNavSide";

const links = [
    {
        name: `Master`,
        href: ``,
        children: [
            {
                name: `Category`,
                href: `/dashboard/master/category`,
            },
            {
                name: `Segment`,
                href: `/dashboard/master/segment`
            },
            {
                name: `Part`,
                href: `/dashboard/master/part`
            },
            {
                name: `Brand`,
                href: `/dashboard/master/brand`
            },
        ]
    }, {
        name: `Transaction`,
        href: `/transaction`,
        children: [
            {
                name: `Transfer`,
                href: `/transfer`
            },
            {
                name: `Purchase`,
                href: `/purchase`
            }
        ]
    }
];

function Layout({ children }: { children: React.ReactNode }) {
    return (
        <main className="flex w-screen">
            <div className="hidden md:block min-w-80 w-2/12">
                <NavSide links={links} />
            </div>
            <div className="w-full md:w-10/12">
                <div className="flex flex-col">
                    <div className="w-full">
                        <div className="w-full flex gap-3 p-5 border-b border-neutral-700">
                            <Image
                                src="/aim-icon-16x16.png"
                                className="h-fit rounded-full"
                                alt="aim icon"
                                width={16}
                                height={16}
                                priority
                            />
                            <h1 className="font-mono">
                                AIM System
                            </h1>
                        </div>
                        <div className="w-full p-5 border-b border-neutral-700 md:hidden">
                            <MobileSideNav links={links} />
                        </div>
                    </div>
                    <div className="p-5">
                        {children}
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Layout;
