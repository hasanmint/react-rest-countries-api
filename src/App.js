import logo from './logo.svg';
import './App.css';
import { PureComponent, useEffect, useState } from 'react';
import Countries from './components/Countries/Countries';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
     <Header></Header>
     <Countries></Countries>
    </div>
  );
}


/* 
function LoadCountries(){

  const [countries ,setCountries]=useState([]);

  useEffect( ()=>{
    fetch('https://restcountries.com/v2/all')
    .then(Response=>Response.json())
    .then(data=>setCountries(data))
  },[])



  return(
    <div>
      <h1>Visiting Every Countries</h1>
      <h2>Avabilble Countries:{countries.length}</h2>
      {
        // countries.map(country=> <p>{country.name}</p>)//every country objects
        countries.map(country=> <Country name={country.name} population={country.population}></Country>)//every country objects
      }
    </div>
  )
}


function Country(props){
  // console.log(props.name)
  // console.log(props.population)
  return(
    <div>
      <p><b>Name: </b>{props.name}</p>
      <p><b>Population: </b>{props.population}</p>
    </div>
  )
} */

export default App;
