import ItemCount from "../ItemCount/ItemCount";
import {Link} from "react-router-dom"
import { useState } from "react";

const ItemDetail= ({item})=>{
        const [quantity, setQuantity]= useState(0);

        const agregarAlCarrito=(numberOfProduct)=>{
            setQuantity(numberOfProduct)
            console("Producto Agregado")
        }
        if(!item){
            return(
                <h1>Cargando...</h1>
            )
        }
    return(
        <div className="container w-100 p-3">
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={`../../${item?.img}`} className="img-fluid rounded-start" alt={item?.nombre}/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                        <h5 className="card-title">{item?.nombre}</h5>
                            <p className="card-text">{item.descripcion}</p>
                            <ItemCount props={item} onConfirm={agregarAlCarrito}/>
                            <Link to={'/cart'} >Ir al carrito</Link>
                        </div>
                    </div>
                </div>
           </div>
        </div>                         
    )
}
export default ItemDetail