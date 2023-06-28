import {  doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import Loading from "./Loading";


const ItemDetailContainer = () => {
    const [item, setItem] = useState({})
    const {id} = useParams()
    const [loadin, setLoadin] = useState(true)



    useEffect(() => {
        const db = getFirestore();
        const document = doc(db, "items", id)
        getDoc(document).then(prods => {
            setItem({id:prods.id, ...prods.data()})
            setLoadin(false)
        })
    
    }, [id])


    return (
        <div>
            {loadin ? <Loading /> : <ItemDetail item={item} />}
        </div>
    )
}


export default ItemDetailContainer;