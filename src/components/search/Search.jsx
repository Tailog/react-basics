import React from 'react';

import './search.css';

export const Search = ({ placeholder, handleChange}) =>{
  return (
    <div>
      <input
        className="search-box" 
        type="search"
        placeholder ={placeholder}
        onChange = {handleChange}
      />
    </div>
  )
}