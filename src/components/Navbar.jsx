import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (

        <ul className="nav d-flex justify-content-end">
            <li className="nav-item">
                <NavLink className="nav-link active text-dark" aria-current="page" to={"/"}>Inicio</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link text-dark" to={"/category/Remeras"}>Remeras</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link text-dark" to={"/category/Pantalones"}>Pantalones</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link text-dark" to={"/category/Buzos"}>Buzos</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link text-dark" to={"/category/Camperas"}>Camperas</NavLink>
            </li>
        </ul>


    )
}

export default NavBar;