import React, { useRef, useEffect } from 'react';
import './searchBarDropdown.css';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { searchValue } from '../../redux/action/index';

const SearchBarDropdown = (props) => {
    const { options, onInputChange, handleSearchClick, onSearchIconClick } = props;
    const dispatch = useDispatch();

  const ulRef = useRef();
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.addEventListener('click', (event) => {
      event.stopPropagation();
      ulRef.current.style.display = 'flex';
      onInputChange(event);
    });
    document.addEventListener('click', (event) => {
      ulRef.current ? ulRef.current.style.display = 'none': console.log("not getting ul value");
    });
  }, []);
  return (
    <div className="search-bar-dropdown">
      <input
        type="text"
        className="searchBarInput"
        placeholder="Search"
        onChange={onInputChange}
        ref={inputRef}
        onKeyPress={handleSearchClick}
      />
         <i className="fa fa-search searchIcon-searchBar"
         onClick={onSearchIconClick}
         ></i>
      <ul className="list-group result-of-searchBarDropdown" ref={ulRef}>
        {options.map((option, index) => {
          return (
            <button
              type="button"
              key={index}
              onClick={(e) => {
                inputRef.current.value = option;
                dispatch(searchValue(option));
              }}
              className="button-searchBarDropdown"
            >

          <Link
            to="/searchResult"
            style={{ textDecoration: "none", color: "black" }}
          > 
              {option}
           </Link>
            </button>
          );
        })}
      </ul>
    </div>
  );
}
 
export default SearchBarDropdown;