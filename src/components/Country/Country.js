import React from 'react';
import './Country.css'

const Country = (props) => {
    const {name, population , region,flags}=props.country;

    // console.log(flags.png);
    return (
        <div className='country'>
             <h2><b>Country Name : </b>{name}</h2>
            <img src={flags.png} alt="" />
            <p><b>Country Population : </b>{population}</p>
            <p><b>Region : </b>{region}</p> 
        </div>
    );
};

export default Country;