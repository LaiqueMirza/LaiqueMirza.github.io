import React, { useState, useEffect } from 'react';
import axios from "axios";
// import 'bootstrap/dist/css/bootstrap.min.css';
import './searchBar.css';
import SearchBarDropdown from './searchBarDropdown/searchBarDropdown';
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { searchValue } from '../redux/action/index';

// BAD PRACTICE 
//YOU SHOULD MAKE THE API CALL ON SEARCH
//NOT GET ALL THE PRODUCTS NAME 
//I HAVE TO IMPLEMEMT DEBOUNCING

// have to add on click even in search


const SearchBar = () => {

  const dispatch = useDispatch();
  let history = useHistory();
  const [products, setProducts] = useState([]);
  const [options, setOptions] = useState([]);
  const [targetvalue, setTargetValue] = useState("");
  useEffect(() => {
   
    axios
      .get("/api/products")
      .then((res) => setProducts(res.data.result))
      .catch((err) => console.log(err));
  }, []);

const handleSearchClick =(e)=> {
  if(e.key === "Enter"){
  dispatch(searchValue(e.target.value.toLowerCase()));
  return history.push("/searchResult");
}
}

const onSearchIconClick =(e) =>{
  dispatch(searchValue(targetvalue));
  return history.push("/searchResult")

} 
// tolowercase
 const defaultOptions = [];
 if(products && products[0]){
 
  products.map(product => defaultOptions.push(product.productName.toLowerCase()))
  // console.log(defaultOptions);
 }
 
 const onInputChange = (event) => {
    setOptions(
      defaultOptions.filter((option) => option.includes(event.target.value.toLowerCase()))
    );
    setTargetValue(event.target.value.toLowerCase())
  };
  console.log(options)
  return (
    <div className="searchBarDiv">
      <SearchBarDropdown 
      options={options}
       onInputChange={onInputChange}
       handleSearchClick={handleSearchClick}
       onSearchIconClick={onSearchIconClick}
       className="searchBarInput"
       />
      
     </div>
  );
}


export default SearchBar;
