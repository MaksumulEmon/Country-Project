import React, { use } from 'react';

const Countries = ({countriesPromies}) => {
    const  countriesData= use(countriesPromies);
    const countries =countriesData.countries;
    console.log(countries);
    return (
        <div>
            <h1>Hello:{countries.length}</h1>
        </div>
    );
};

export default Countries;