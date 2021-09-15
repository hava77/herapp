import React from 'react'
import ItemList from '../ItemList/ItemList'

const ItemListContainer= ({welcome})=>{
    return(
        <div>
            <h1>{welcome}</h1>
            <ItemList/>
        </div>
    )
}

export default ItemListContainer