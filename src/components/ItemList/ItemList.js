import Item from '../Item/Item';

const ItemList = ({props})=>{

    return (
    props.map (e =>
        <Item key={e.id} item={e}/>
        )
    )
}

export default ItemList