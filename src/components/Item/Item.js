import { Link} from 'react-router-dom';


const Item= ({item})=>{
    return(
        <div className="col">
            <div className="card">
                <img src= {item?.img} className="card-img-top" alt={item?.nombre}/>
                <div className="card-body">
                    <h5 className="card-title">{item?.nombre}</h5>
                    <Link to={`/item/${item?.id}`} className="btn btn-secondary m-2">Ver Productos</Link>
                </div> 
            </div>
        </div>
    )
}

export default Item