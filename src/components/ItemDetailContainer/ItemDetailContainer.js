import ItemDetail from "../ItemDetail/ItemDetail"
import { useEffect, useState } from "react";
import { useParams } from 'react-router';

function getProducts () {
    return new Promise ((resolve, reject)=> {
        const acuabreed=[
            {id:1, nombre:"Peces",descripcion:"Agua fria y tropicales", img:"img/pez.jpg",cantidad: 15},
            {id:2, nombre:"Acuarios",descripcion:"Tamaños: Chico, mediano y grande", img:"img/pez.jpg",cantidad: 25},
            {id:3, nombre:"plantas",descripcion:"Vallisneria, echinodorus, cabocha, entre otras", img:"img/pez.jpg",cantidad: 20},
            {id:4, nombre:"accesorios",descripcion:"Filtros, sifones, graba y accesorios", img:"img/pez.jpg",cantidad: 30}
        ]
        setTimeout(()=> resolve(acuabreed), 2000)
    })
}
const ItemDetailContainer=()=>{
    const { id } = useParams();
    const [products, setListProducts] = useState(undefined);
    useEffect (()=>{
        const list = getProducts();
        list.then(lista => {
            const prod = lista.find(e => e.id == id)
            setListProducts(prod)
        })
    },[id])
    console.log(products);
    return(
        <div>
            {products === undefined ? <h1>Cargando...</h1> : <ItemDetail item={products}/>}
        </div>

    )
}
export default ItemDetailContainer