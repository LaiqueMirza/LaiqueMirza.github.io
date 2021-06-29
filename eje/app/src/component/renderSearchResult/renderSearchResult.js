import React, {useEffect, useState} from 'react';
import "./renderSearchResult.css";
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux';
import Products from '../product/products/products';

const RenderSearchResult = () => {
  const userSearchedValue = useSelector(state => state.searchValue);
console.log(userSearchedValue);

  const [data, setdata] = useState({})
  const [loading, setLoading] = useState(true);

    useEffect(() => {
          axios
          .get(`/products/${userSearchedValue}`)
          .then((res) => setdata(res.data))
          .catch((err) => console.log(err));
          setLoading(false);

      }, [userSearchedValue]);
    console.log(data);
 


    return (   <div className="shopDiv">
      {loading && <img className="med-8x6 lazyautosizes lazyloaded monkeyLoader" alt="Monkey Swinging Loader. Hello Dribbble!! monkey motion design duik after effects loader swinging gif" width="auto" height="auto" data-id="2946353" data-optimize-for-bots="true" data-srcset="https://cdn.dribbble.com/users/1319489/screenshots/2946353/monkey-1.gif 300w, https://cdn.dribbble.com/users/1319489/screenshots/2946353/monkey-1.gif 400w, https://cdn.dribbble.com/users/1319489/screenshots/2946353/monkey-1.gif 600w, https://cdn.dribbble.com/users/1319489/screenshots/2946353/monkey-1.gif 800w" data-src="https://cdn.dribbble.com/users/1319489/screenshots/2946353/monkey-1.gif" data-sizes="auto" skip_resize="true" srcset="https://cdn.dribbble.com/users/1319489/screenshots/2946353/monkey-1.gif 300w, https://cdn.dribbble.com/users/1319489/screenshots/2946353/monkey-1.gif 400w, https://cdn.dribbble.com/users/1319489/screenshots/2946353/monkey-1.gif 600w, https://cdn.dribbble.com/users/1319489/screenshots/2946353/monkey-1.gif 800w" src="https://cdn.dribbble.com/users/1319489/screenshots/2946353/monkey-1.gif"  />    }
      
<section className="clothing-section">

<h3 className="header-clothing">Your Searched Result is</h3>

<div className="clothing" id="clothing">
{data.length ?
 data.map((product) => (
        <Products
         data={product} 
        key={product._id}
        />
    ))
     : <h2>There is no data</h2>}
</div>
    

</section>
      
    </div>);
}
 
export default RenderSearchResult;