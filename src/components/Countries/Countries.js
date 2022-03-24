import { useEffect, useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {

    const [countries, setCountries]=useState([]);

    useEffect(()=>{
        fetch('https://restcountries.com/v2/all')
        .then(Response=>Response.json())
        .then(data=>setCountries(data))
    },[])

    return (
        <div>
            <h2>All Countries World: {countries.length} </h2>
            {
                //  countries.map(country => console.log(country))
            }
           <div className="countries-container">
           {
                
            
                countries.map(country =><Country  country={country} key={country.numericCode}></Country>)

                    // name={country.name} 
                    // population={country.population} 
                    // region={country.region}
                    //  >

                    // * </Country>) */
            }
           </div>
        </div>
    );
};

export default Countries;