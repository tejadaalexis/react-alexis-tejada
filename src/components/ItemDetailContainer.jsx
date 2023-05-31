import { useEffect,useState } from "react";
import productos from "./jason/product.json";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";



const ItemDetailContainer = () => {
    const [item, setItems] = useState({});
    const {id} = useParams();
    
    useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                let producto = productos.find( item => item.idx === parseInt(id));
                resolve (producto);
            }, 2000);
        })

        promesa.then(data => {
            setItems(data);
        });
    }, [id]);

    return (
        <>
            <ItemDetail producto={item}/>
        </>

    )
}

export default ItemDetailContainer;