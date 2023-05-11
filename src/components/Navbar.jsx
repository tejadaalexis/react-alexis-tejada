const Navbar = () => {
    return (

        <ul className="nav d-flex justify-content-end">
            <li className="nav-item">
                <a className="nav-link active text-dark" aria-current="page" href="#">Inicio</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-dark" href="#">Contacto</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-dark" href="#">Nostros</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-dark" href="#">Productos</a>
            </li>
        </ul>


    )
}

export default Navbar;