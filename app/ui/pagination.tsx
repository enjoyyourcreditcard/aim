async function Pagination() {
    return(
        <nav className="flex items-center justify-center md:justify-between flex-column flex-wrap md:flex-row" aria-label="Table navigation">
            <span className="text-sm text-center font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">Showing <span className="font-semibold text-gray-900 dark:text-white">1-10</span> of <span className="font-semibold text-gray-900 dark:text-white">1000</span></span>
            <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
                <li>
                    <a href="#" className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 border border-neutral-700 rounded-s-lg bg-black hover:bg-neutral-800 hover:text-gray-700 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
                </li>
                <li>
                    <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 border border-neutral-700 bg-black hover:bg-neutral-800 hover:text-gray-700 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                </li>
                <li>
                    <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 border border-neutral-700 bg-black hover:bg-neutral-800 hover:text-gray-700 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                </li>
                <li>
                    <a href="#" aria-current="page" className="flex items-center justify-center px-3 h-8 border border-neutral-700 dark:border-gray-700 dark:bg-neutral-800 dark:text-white">3</a>
                </li>
                <li>
                    <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 border border-neutral-700 bg-black hover:bg-neutral-800 hover:text-gray-700 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
                </li>
                <li>
                    <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 border border-neutral-700 bg-black hover:bg-neutral-800 hover:text-gray-700 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
                </li>
                <li>
                    <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 border border-neutral-700 rounded-e-lg bg-black hover:bg-neutral-800 hover:text-gray-700 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
                </li>
            </ul>
        </nav>
    );
}

export default Pagination;