async function Search() {
    return (
        <>
            <label htmlFor="table-search" className="sr-only">Search</label>
            <div className="flex gap-4">
                <div className="relative flex-grow">
                    <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input type="text" id="table-search" className="w-full block py-2 ps-10 text-sm text-gray-900 border border-neutral-700 bg-black rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for items" />
                </div>

                {/* New Item */}
                <button className="border border-neutral-700 hover:bg-neutral-800 active:bg-black rounded-lg px-5 text-sm flex justify-center items-center gap-2 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                    New Category
                </button>
            </div>
        </>
    );
}

export default Search;
