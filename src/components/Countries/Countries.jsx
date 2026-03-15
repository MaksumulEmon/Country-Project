import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({ countriesPromies }) => {

    const [visitedCountries, setVisitedCountries] = useState([]);

    const handleVisitedCountries =(country) =>{
        console.log('handle visited',country);
    }
    const countriesData = use(countriesPromies);
    const countries = countriesData.countries;
    // console.log(countries);
    return (
        <div >
            <h1>Hello:{countries.length}</h1>
            <h4>Total countries visited:</h4>

            <div className='countries'>
                {
                    countries.map(country => <Country
                        key={country.cca3.cca3}
                        country={country}
                        handleVisitedCountries ={handleVisitedCountries}
                        ></Country>)

                }
            </div>

        </div>
    );
};

export default Countries;