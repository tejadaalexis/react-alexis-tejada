import { useContext } from "react";
import basura from "./images/basura.svg";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart, cartTotal, sumTotal, removeItem, clear } = useContext(CartContext);
    if (cartTotal() === 0) {
        return (
            <div className="container my-5">
                <div className="row">
                    <div className="col text-center">
                        <div className="alert alert-blue" role="alert">No hay productos!</div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col text-center">
                    <h1>Productos Seleccionados</h1>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <table className="table">
                        <tbody>
                            <tr>
                                <td colSpan={4}>&nbsp;</td>
                                <td className="text-end"><button className="btn btn-light" onClick={() => { clear() }} title="Vaciar Carrito">Vaciar Carrito</button></td>
                            </tr>
                            {
                                cart.map(item => (
                                    <tr key={item.id}>
                                        <td><img src={item.imagen} alt={item.titulo} width={80} /></td>
                                        <td>{item.titulo}</td>
                                        <td>{item.cantidad} x ${item.precio}</td>
                                        <td className="text-center">${item.cantidad * item.precio}</td>
                                        <td className="text-end"><button className="btn btn-light" onClick={() => { removeItem(item.id) }} title="Eliminar Producto"><img src={basura} alt="Eliminar Producto" width={32} /></button></td>
                                    </tr>
                                ))
                            }
                            <tr>
                                <td colSpan={3} className="text-end">Total a Pagar</td>
                                <td className="text-center">${sumTotal()}</td>
                                <td>&nbsp;</td>
                            </tr>
                            <tr>
                                <td colSpan={3} className="align-middle text-end">Total a Pagar</td>
                                <td className="align-middle text-center">${sumTotal()}</td>
                                <td className="align-middle text-end"><Link to={"/checkout"} className="btn btn-light">Finalizar Compra</Link></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Cart;