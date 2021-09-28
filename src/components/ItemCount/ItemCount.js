import { useState } from "react";

const ItemCount = ({props})=>{
    const [count, setCount] = useState(0)
     
    const Restar = ()=>{
        if (count === 0){
        console.log('nada');
    }else{
        setCount(count -1);
    }};
    
    const Sumar = ()=>{
        if(count === props.cantidad){
            console.log('nada')
        }else{
            setCount(count +1)
        }
    }

    return(
        <div>
            <div>{count}</div>
            <button onClick= {Restar}>-</button>
            <button onClick= {Sumar}>+</button>
        </div>
    )
}

export default ItemCount