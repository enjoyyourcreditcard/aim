import { Metadata } from "next";
import Pagination from '../../../ui/pagination';
import Table from '../../../ui/segment/table';
import Search from '../../../ui/search';

export const metadata: Metadata = {
    title: 'Segment'
};

function Page({
    searchParams
}: {
    searchParams?:  {
        query?: string;
        page?: string;
    }
}) {
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;

    return (
        <>
            <Search />
            <div className="mt-4">
                <Table
                    query={query}
                    currentPage={currentPage}
                />
            </div>
            <div className="mt-4">
                <Pagination />
            </div>
        </>
    );
}

export default Page;