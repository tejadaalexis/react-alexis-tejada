import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const db = getFirestore();
        const producto = doc(db, "cripp_items", id);
        getDoc(producto).then(resultado => {
            setItem({ id: resultado.id, ...resultado.data() });
        });
    }, [id])

    return (
        <>
            <ItemDetail producto={item} />
        </>)
}

export default ItemDetailContainer;