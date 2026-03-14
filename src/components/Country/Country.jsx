import React, { useState } from 'react';
import './Country.css'
const Country = ({ country }) => {
    const [visited, setVisited] = useState(false);
    // console.log(country.population.population);

    const handleVisited = () => {
        //    if(visited){
        //     setVisited(false);
        //    }else{
        //     setVisited(true);
        //    }
        setVisited(!visited);
    }

    return (
        <div className={`country ${visited &&`country-visited`}`}>
            <img src={country?.flags?.flags?.png} alt='country.flags.flags.png'></img>
            <h3>Name: {country.name.common}</h3>
            <p>Population:{country.population.population}</p>

            <p>Area: {country.area.area} {country.area.area > 300000 ? "Big Country" : 'Small country'}</p>

            <button className='button' onClick={handleVisited}>
                {visited ? 'Visited' : 'Not visited'}</button>
        </div>
    );
};

export default Country;