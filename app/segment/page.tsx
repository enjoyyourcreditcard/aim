import { Metadata } from "next";
import MobileSideNav from "../ui/mobileNavSide";
import NavSide from "../ui/navSide";
import Image from "next/image";
import Pagination from '../ui/pagination';
import Table from '../ui/table';
import Search from '../ui/search';

export const metadata: Metadata = {
    title: 'Segment'
};

function Page() {
    return (
        <main className="flex w-screen">
            <div className="hidden md:block min-w-80 w-2/12">
                <NavSide />
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
                            <MobileSideNav />
                        </div>
                    </div>
                    <div className="p-5">
                        <Search />
                        <div className="mt-4">
                            <Table />
                        </div>
                        <div className="mt-4">
                            <Pagination />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Page;