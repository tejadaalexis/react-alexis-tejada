import Item from "./Item";

const ItemList = ({productos}) => {

    return (
        <>
            {productos.map(producto => <div key={producto.idx} className="col-md-4 my-3">
                <Item producto={producto} />
            </div>)}
        </>

    )

}

export default ItemList; 