import { useEffect, useState } from "react";
import Item from "../Item/Item"
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";

const products= [
    {id:1, nombre:"Peces",descripcion:"Agua fria y tropicales"},
    {id:2, nombre:"Acuarios",descripcion:"Tamaños: Chico, mediano y grande"},
    {id:3, nombre:"plantas",descripcion:"Vallisneria, echinodorus, cabocha, entre otras"},
    {id:4, nombre:"accesorios",descripcion:"Filtros, sifones, graba y accesorios"},
]

function miLista () {
    return new Promise ((resolve, reject)=> {
        setTimeout(()=> resolve(products), 2000)
    })
}

const ItemList = ()=>{
    const [listProducts, setListProducts] = useState([])

    useEffect (()=>{
        const lista = miLista()
        lista.then(lista=> {
            setListProducts (lista)
        })
    }, [])

    return (
        <div className="ItemList">
            {listProducts.map (producto =>
                <Item key={producto.id} name={producto.nombre} description={producto.descripcion}/>)}
                <ItemDetailContainer/>
        </div>
    )
}

export default ItemList