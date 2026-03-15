import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({ countriesPromies }) => {

    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags,setVisitedflags] =useState([]);

    const handleVisitedCountries =(country) =>{
        console.log('handle visited',country);
        const newVisitedCountries = [...visitedCountries,country];
        setVisitedCountries(newVisitedCountries);
    }
    const handleVisitedFlags =(flags) =>{
        // console.log('Flag ned to be added',flags)
        const newVisitedflags = [...visitedFlags,flags];
        setVisitedflags(newVisitedflags)
    }
    const countriesData = use(countriesPromies);
    const countries = countriesData.countries;
    // console.log(countries);
    return (
        <div >
            <h1>Countries:{countries.length}</h1>
            <h4>Total countries visited: {visitedCountries.length}</h4>
            <h4>Total Flag visited :{visitedFlags.length}</h4>
            <ol>
                {
                    visitedCountries.map(country =>  <li key={country.cca3.cca3}>{country.name.common}</li>)
                }
            </ol>

            <div className='visited-flags-container'>
                {
                    visitedFlags.map((flag,index) => <img key={index} src={flag}></img>)
                }
            </div>

            <div className='countries'>
                {
                    countries.map(country => <Country
                        key={country.cca3.cca3}
                        country={country}
                        handleVisitedCountries ={handleVisitedCountries}
                        handleVisitedFlags={handleVisitedFlags}
                        ></Country>)

                }
            </div>

        </div>
    );
};

export default Countries;