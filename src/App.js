import React, { useEffect, useState } from 'react'
import './App.css';
import Country from './Components/Country/Country';
import Item from './Components/Country/Item/Item';

function App() {
  const [country,setCountry]=useState([])
  const [item,setItem]=useState([])
  useEffect(()=>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res=>res.json())
    .then(data=>{
      setCountry(data)
      console.log(data)
    })
  },[])
  function addCountry(add){
    setItem([...item,add])
  }
  return (
    <div className="App">
      <h2>Country Loaded : {country.length}</h2>
      <Item item={item}/>
     {
       country.map((country)=>{
         return <Country addCountry={addCountry} key={country.alpha3Code} country={country}/>
       })
     }
    </div>
  );
}

export default App;
