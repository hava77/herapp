import React from 'react'
import ItemList from '../ItemList/ItemList'
import { useEffect, useState } from 'react'

const acua= [
    {id:1, nombre:"Peces",descripcion:"Agua fria y tropicales", img:"img/pez.jpg"},
    {id:2, nombre:"Acuarios",descripcion:"Tamaños: Chico, mediano y grande", img:"img/pez.jpg"},
    {id:3, nombre:"plantas",descripcion:"Vallisneria, echinodorus, cabocha, entre otras", img:"img/pez.jpg"},
    {id:4, nombre:"accesorios",descripcion:"Filtros, sifones, graba y accesorios", img:"img/pez.jpg"},
]
function products () {
    return new Promise ((resolve, reject)=> {
        setTimeout(()=> resolve(acua), 2000)
    })
}
const ItemListContainer = ()=> {
    const [listProducts, setListProducts] = useState([])

    useEffect (()=>{
        const lista = products()
        
        lista.then(lista=> {
            setListProducts (lista)
        })
        
    },[])
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