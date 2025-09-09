import React from 'react'

function Search({handleInput,SearchResult}) {
  return (
    <div className="search_Input mt-3 mb-5">
      <input type="text" name="movie" className="w-50 p-2" placeholder="Search Hollywood Movies..." 
      onChange={handleInput}
      onKeyDown={SearchResult}/>
    </div>
  )
}

export default Search
