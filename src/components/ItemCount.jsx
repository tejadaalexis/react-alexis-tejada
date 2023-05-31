import { useEffect, useState } from "react";

const ItemCount = ({ stock }) => {
    const [items, setItems] = useState(1);
    const [itemsStock, setItemStock] = useState(stock)

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

    const onAdd = () => {
        if (items <= itemsStock) {
            setItemStock(itemsStock - items);
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
                    <button type="button" className="btn btn-light" onClick={onAdd}>Agregar al Carro</button>
                </div>
            </div>
        </div>
    )
}
export default ItemCount