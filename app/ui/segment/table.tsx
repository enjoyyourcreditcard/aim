import { fetchSegments } from "@/app/lib/data";

async function Table({
    query,
    currentPage
}: {
    query: string;
    currentPage: number;
}) {
    const segments = await fetchSegments(query, currentPage);

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg border border-neutral-700">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="bg-neutral-800 text-xs text-gray-700 uppercase dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Segment name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Category
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Total parts
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        segments.map((segment) => (
                            <tr className="border-b border-neutral-700" key={`${segment.id}`}>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    { segment.name }
                                </th>
                                <td className="px-6 py-4">
                                    { segment.category.name }
                                </td>
                                <td className="px-6 py-4">
                                    { segment._count.parts }
                                </td>
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