import React from 'react';

const Country = (props) => {
    const {name,population,region,flag}=props.country
    return (
        <div>
            <h4>This is {name}</h4>
            <img style={{width:'150px',height:'80px'}} src={flag} alt={name}/>
            <h5>Population : {population}</h5>
            <p>Region : {region}</p>
            <button onClick={()=>props.addCountry(props.country)}>Add Country</button>
        
        </div>
    );
};

export default Country;