import carrito from "../components/images/carrito.svg";

const CartWidget =() => {
    return(
        <button type="button" className="btn btn-light">
            <img src={carrito} alt="Carrito de compra" width={25} />
            <span className="badge text-bg-danger">10</span>
        </button>
    )
}

export default CartWidget;