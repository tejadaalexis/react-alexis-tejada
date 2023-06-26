
import { useEffect, useState } from "react";
//import productos from "./jason/product.json";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { getFirestore, collection, where, query, getDocs } from "firebase/firestore";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const { id } = useParams();

    /*useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(id ? productos.filter (item => item.categoria === id) : productos)
            }, );
        })
        promesa.then(data => {
            setItems(data);
        })
    }, [id]);*/

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "cripp_items");
        const q = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection;
        getDocs(q).then(resultado => {
            if (resultado.size > 0) {
                setItems(resultado.docs.map(producto => ({ id: producto.id, ...producto.data() })));
            } else {
                console.error("No se encuentra el producto");
            }
        });
    }, [id]);

    /*useEffect(()=> {
        const db = getFirestore();
        const itemsCollection = collection(db, "cripp_items");

        productos.forEach(producto => {
            addDoc(itemsCollection, producto);
        });

    }, [])*/

    return (
        <div className="container my-5">
            < div className="row">
                <ItemList productos={items} />

            </div>
        </div >

    )
}

export default ItemListContainer;