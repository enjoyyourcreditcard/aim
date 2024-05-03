import { fetchCategories } from '@/app/lib/data';

async function Table({
    query,
    currentPage
}: {
    query: string;
    currentPage: number;
}) {
    const categories = await fetchCategories(query, currentPage);

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg border border-neutral-700">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="bg-neutral-800 text-xs text-gray-700 uppercase dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Category name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Total segments
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        categories.map((category) => (
                            <tr className="border-b border-neutral-700" key={`${category.id}`}>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    { category.name }
                                </th>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    { category._count.segments }
                                </th>
                                <td className="px-6 py-4">
                                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Table;