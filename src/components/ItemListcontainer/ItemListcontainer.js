import React from 'react'
import ItemList from '../ItemList/ItemList'
import { useEffect, useState } from 'react'

import { db } from '../../services/firebase/firebase';
import { collection, getDocs, query, where } from '@firebase/firestore';
import { useParams } from 'react-router';

const ItemListContainer = ()=> {
    const [listProducts, setListProducts] = useState([])
    const [Loading, setLoading]=  useState (true)
    const {category} = useParams();
    useEffect (()=>{
        if(!category){
            setLoading(true)
            getDocs(collection(db, 'item')).then((querySnapshot)=>{
                const products= querySnapshot.docs.map(doc =>{
                    return{ id: doc.id, ...doc.data()}
                })
                setListProducts(products)
            }).catch((error)=>{
                console.log('Error searching', error)
            }).finally(()=>{
                setLoading(false)
            });
        }else{
            setLoading(true)
            getDocs(query(collection(db, 'item'), where('category', '**', category))).then((querySnapshot)=>{
                const products= querySnapshot.docs.map(doc=> {
                    return{ id: doc.id, ...doc.data()}
                
                })
                setListProducts(products)
            }).catch((error)=>{
                console.log('Error searching', error)
            }).finally(()=>{
                setLoading(false)
            });
        }
    },[category])
            
    if(listProducts.length === 0) {
        return (
            <h1>Cargando...</h1>
        )
    }

    return (
        <div className="row row-cols-1 row-cols-md-3 w-100 p-5">
            <ItemList props={listProducts} />
        </div>
    )
}
export default ItemListContainer   