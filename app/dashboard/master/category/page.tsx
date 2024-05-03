import { Metadata } from "next";
import Pagination from '../../../ui/pagination';
import Search from '../../../ui/search';
import Table from '../../../ui/category/table';

export const metadata: Metadata = {
    title: 'Category'
};

async function Page({
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