import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({stock, onAdd}) => {
    const [items, setItems] = useState(1);
    const [itemsStock, setItemStock] = useState(stock)
    const [itemAdded, setItemAdded] = useState(false)

    useEffect(() => {
        setItemStock(stock);
    }, [stock]);


    const incrementarStock = () => {
        if (items < itemsStock) {
            setItems(items + 1);
        }
    }

    const decrementarStock = () => {
        if (items > 1) {
            setItems(items - 1);
        }
    }

    const addCart = () => {
        if (items <= itemsStock) {
            setItemStock(itemsStock - items);
            setItems(1);
            setItemAdded(true);
            onAdd(items);
        }
    }


    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-light" onClick={decrementarStock}>-</button>
                        <button type="button" className="btn btn-light">{items}</button>
                        <button type="button" className="btn btn-light" onClick={incrementarStock}>+</button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    {itemAdded ? <Link to={"/cart"} className="btn btn-light"> Finalizar Compra</Link> : <button type="button" className="btn btn-light" onClick={addCart}>Agregar al Carro</button>}
                </div>
            </div>
        </div>
    )
}
export default ItemCount