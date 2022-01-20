import React from "react";
import { useState } from 'react';

function ItemCount ({ stock, initial }){
    const [itemsQty, setItemsQty] = useState(parseInt(initial));
    return(
        <div className = "container">
            <div>
                <button class = "btn btn-primary" onClick={() =>{if(itemsQty > 0){setItemsQty (itemsQty - 1)}}}>-</button>
                <span class = "mx-2">
                    {itemsQty}
                </span>
                <button class = "btn btn-primary" onClick={() =>{if(itemsQty < stock){setItemsQty (itemsQty + 1)} else{alert("producto sin stock")}}}>+</button>
            </div>
            <button class="btn btn-outline-primary m-2">
                Agregar al carrito
            </button>
        </div> 
    )      
}

export default ItemCount;