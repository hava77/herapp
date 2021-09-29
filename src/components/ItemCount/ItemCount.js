import { useState } from "react";

const ItemCount = ({props, onConfirm})=>{
    const [count, setCount] = useState(0)
     
    const Restar = ()=>{
        if (count > 0){
            setCount(count -1)
        }}; 
    const Sumar = ()=>{
        if(count < props.cantidad){ 
            setCount(count +1)
        }
    } 
    return(
        <div>
            <div>{count}</div>
            <button onClick= {Restar}>-</button>
            <button onClick= {Sumar}>+</button>
            <button onClick={()=> onConfirm(count)}>agregar al carrito</button>
        </div>
    )
}

export default ItemCount