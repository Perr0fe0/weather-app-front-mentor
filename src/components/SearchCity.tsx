import SearchButton from "./SearchButton"

const SearchCity = () => {
    return (
        <div className="card-search flex flex-col w-[90%] gap-2">
            <input
                className="p-3 rounded-lg"
                type="text"
                placeholder="Search for a place..." />

            <SearchButton />
        </div>
    )
}
export default SearchCity