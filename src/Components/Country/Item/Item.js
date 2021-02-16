import React from 'react';

const Item = (props) => {
    const cart=props.item
    const total=cart.reduce((sum,cart)=>sum+cart.population,0)
    return (
        <div>
            <h2>Country Added : {props.item.length}</h2>
            <h5>Total-Population : {total}</h5>
        </div>
    );
};

export default Item;