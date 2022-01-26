import React from "react";
import { useState } from 'react';
import Item from './Item';

function ItemList (){
    const [items, setItems] = useState([
        {id: "1", title: "zapatillas nike air", price: "15000", brand: "Nike", stock: "6"},
        {id: "2", title: "remera", price: "1800", brand: "Adidas", stock: "10"},
        {id: "3", title: "short deportivo", price: "3000", brand: "Fila", stock: "15"}
    ]
    )
    return(
        items.map(item => {
            return <Item id={item.id} title={item.title} brand={item.brand} price={item.price}></Item>
        })
    )
}

export default ItemList;