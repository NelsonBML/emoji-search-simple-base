import "../App.css";
import React from 'react';

const SearchBar = (props) => {
    return (
        <>
            <input onChange={props.handleChange} type="text" placeholder="Search..." className="Search input" value={props.inputValue}></input>
            <div>HERE</div>
        </>
    );
  };


export default SearchBar;