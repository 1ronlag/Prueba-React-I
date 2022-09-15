import React from 'react'

const Search = ({searchInput,handleChange}) => {
  return (
    <div className='containerInput'>
        <input
          className='inputBuscar'
          value={searchInput}
          type="text"
          placeholder="Search"
          onChange={handleChange}
        />
      </div>
  )
}

export default Search