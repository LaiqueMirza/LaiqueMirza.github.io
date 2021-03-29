// const domContainer = document.querySelector('#like_button_container');
// ReactDOM.render(e(LikeButton), domContainer);

// import React, {useState, React.useEffect} from 'react';
// // import DropdownButton from './dropdownButton/dropdownButton';
// // import Map from '../MAP/map';
// import axios from 'axios';

// // import './corona.css'


const Corona = (props) => {

    const urlWorld = "https://disease.sh/v3/covid-19/all"
    
    const urlCountries = "https://disease.sh/v3/covid-19/countries"

    const [dataMain, setDataMain] = React.useState(null)
    const [dataWorld, setDataWorld] = React.useState(null)
    const [dataCountries, setDataCountries] = React.useState(null)
     const [countryTargetData,setCountryTargetData] = React.useState(null);
    
    
    React.useEffect(() => {
        fetch(urlWorld).then(res => res.json()).then(res => {
             setDataWorld(res);
          setDataMain(res)

        });
        fetch(urlCountries).then(res => res.json()).then(res => setDataCountries(res));
    
    }, [])

    
      console.log("dataMain", dataMain)
      console.log("dataWorld", dataWorld)
      console.log("dataCountries", dataCountries)

        const handleChange = e => {
          const mainValue = e.target.value;
          if(mainValue === "World Wide") {
            setDataMain(dataWorld)
            return setCountryTargetData(null)
          }
           setDataMain(JSON.parse(e.target.value))
           setCountryTargetData(JSON.parse(e.target.value))
        }
   

      return ( 
      <div className="coronaDiv">
          <h2 className="mainHeadingOfCoronaTracker">COVID-19 Tracker [LIVE DATA]</h2>  
          {countryTargetData ? <h2 className="mainHeadingOfCorona">{countryTargetData.country} Data</h2> : <h2 className="mainHeadingOfCorona">World Wide Data</h2> }
        <div className="coronaMainDiv">
          <div className="coronaSecondDiv">

            <div className="coronaSmallContainer1">
              <h4 className="h4TagCorona">CASES</h4>
              <pre className="preCorona">+{dataMain?.todayCases} today</pre>
              <pre className="preCorona">{dataMain?.cases}  total</pre>
            </div>
            <div className="coronaSmallContainer3">
              <h4 className="h4TagCorona">RECOVERED</h4>
              <pre className="preCorona">-{dataMain?.todayRecovered} today</pre>
              <pre className="preCorona">{dataMain?.recovered}  total</pre>
            </div>
            <div className="coronaSmallContainer2">
              <h4 className="h4TagCorona">DEATHS</h4>
              <pre className="preCorona">☠️ {dataMain?.todayDeaths} today</pre>
              <pre className="preCorona">{dataMain?.deaths}  total</pre>

            </div>
           

          </div>


            <DropdownButton 
            handleChange={handleChange}
            datas={dataCountries}
            />
        </div>
      </div>
         );
}
 


const DropdownButton = ({datas,handleChange}) => {
    
    return ( 
        <form className="formCorona">
          <label for="cars" className="dropdownButtonLabel">country: </label>
          <select 
          onChange={handleChange}
          name="cars" id="cars" className="dropdownButtonSelect">
            <option key="world-wide" value="World Wide">World Wide</option>
            {
                datas?.map((item,index) => 
                <option key={index} value={JSON.stringify(item)}>{item.country}</option>
                )
            }
          </select>
        </form>
        );

}
 
