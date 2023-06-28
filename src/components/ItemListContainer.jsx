import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import Loading from "./Loading";

import { collection, getDocs, getFirestore, query, where} from "firebase/firestore"

const ItemlistContainer = () => {
    const [items, setItems] = useState([])
    const {id} = useParams()
    const [loadin, setLoadin] = useState(true)

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        const queryy = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection;
        getDocs(queryy).then(prod => {
            setItems(prod.docs.map(prods => ({id:prods.id, ...prods.data()})))
            setLoadin(false)
        })
    }, [id])


    return (
        <div>
        {loadin ? <Loading /> : <ItemList items={items} /> }
        </div>
        
    )

}


export default ItemlistContainer;