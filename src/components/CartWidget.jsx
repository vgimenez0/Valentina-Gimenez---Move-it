import React from "react";
import iconoCarrito from '../iconoCarrito.svg';

function CartWidget () {
    return (
        <div className="d-flex align-items-center justify-content-center mx-3">
            <img className="logoTienda" src={iconoCarrito}></img>
            <p className="numeroCarrito">0</p>
        </div>
        
    )
}


export default CartWidget;