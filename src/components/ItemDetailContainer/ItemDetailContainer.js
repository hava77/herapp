import ItemDetail from "../ItemDetail/ItemDetail"
import { useEffect, useState } from "react";
import { useParams } from 'react-router';
import { getDoc, doc } from '@firebase/firestore';
import { db } from '../../services/firebase/firebase';
const ItemDetailContainer=()=>{
    const { id } = useParams();
    const [ loading, setLoading] = useState(true);
    const [products, setListProducts] = useState(undefined);
    useEffect (()=>{
        setLoading(true)
        getDoc(doc(db, 'item',id)).then((querySnapshot)=> {
            console.log({id: querySnapshot.id, ...querySnapshot.data()})
            const product = {id: querySnapshot.id, ...querySnapshot.data()}
           setListProducts(product)
        }).catch((error)=> {
            console.log('Error searching', error)
        }).finally(()=>{
            setLoading(false)
        })
        return (()=>{
           setListProducts(undefined)})
        },[id])
    console.log(products);
    return(
        <div>
            {products === undefined ? <h1>Cargando...</h1> : <ItemDetail item={products}/>}
        </div>

    )
}
export default ItemDetailContainer