import { MdSearch } from "react-icons/md"

const Search = ({handleSearchNote}) => {
  const search = (event) => {
    const searchText = event.target.value
    handleSearchNote(searchText)
  }

    return (
        <div className="search">
          <MdSearch className="search-icon" size="1.3em" />   
          <input type="text" 
          placeholder="Type to search..." 
          onChange={search}/>
        </div>
    )
}

export default Search