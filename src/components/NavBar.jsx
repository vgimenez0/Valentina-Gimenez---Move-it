import React from "react";
import logoTienda from '../logo_moveit.png';
import carrito from '../carrito.png';

const NavBar = () => {
    return (
        <nav className="fixed-top navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><img className="logoTienda" src={logoTienda}></img></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Hombre
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="#">Partes de arriba</a></li>
                            <li><a className="dropdown-item" href="#">Partes de abajo</a></li>
                            <li><a className="dropdown-item" href="#">calzado</a></li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Mujer
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="#">Partes de arriba</a></li>
                            <li><a className="dropdown-item" href="#">Partes de abajo</a></li>
                            <li><a className="dropdown-item" href="#">calzado</a></li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Niños/as
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="#">Partes de arriba</a></li>
                            <li><a className="dropdown-item" href="#">Partes de abajo</a></li>
                            <li><a className="dropdown-item" href="#">calzado</a></li>
                        </ul>
                    </li>
                </ul>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"></input>
                    <button className="btn btn-outline-success" type="submit">Buscar</button>
                </form>
                <img className="logoTienda mx-3" src={carrito}></img>
                </div>
            </div>
        </nav>

    );
}

export default NavBar;