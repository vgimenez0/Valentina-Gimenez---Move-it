import React from "react";
import ItemCount from './ItemCount';
import { useState } from 'react';

function Item ({id,title,price,brand,stock}){
    return(
        <div className="container">
            <span className="prodTitle">{title}</span>
            <span>Id: {id}</span>
            <span>{brand}</span>
            <span>${price}</span>
            <ItemCount stock = {stock} initial = "1"></ItemCount>
        </div>
    )
}

export default Item;