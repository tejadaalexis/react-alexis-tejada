import { Link } from "react-router-dom";
const Item = ({ producto }) => {
    return (
        <>
            <div className="card border border-0">
                <Link to= {"/item/" + producto.idx} className="text-dark text-decoration-none">
                    <img src={producto.imagen} class="card-img-top" alt={producto.titulo} />
                    <div className="card-body">
                        <h3>{producto.titulo}</h3>
                        <p className="card-text">{producto.descripcion} <br /> <b>${producto.precio}</b></p>
                    </div>
                </Link>
            </div>
        </>

    )

}

export default Item; 