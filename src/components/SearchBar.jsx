import { IoIosSearch } from "react-icons/io"

const SearchBar = ({ searchQuery, setSearchQuery }) => {
    return (
        <div className="search-container">
           
            <div>
                <IoIosSearch/>
                <input
                    type="text"
                    value={searchQuery}
                    placeholder="Search for a country..."
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>
        </div>
    )
}

export default SearchBar
