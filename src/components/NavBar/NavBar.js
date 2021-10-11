import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
import { NavLink } from 'react-router-dom'
const NavBar=()=>{
    return(
        <nav className="NavBar">
            <div className="LeftNav">
                <div className="NavOptionsLeft">
                <NavLink to="/items" className="Option m-2">Products</NavLink>
                </div>
            </div>
            <div className="RightNav">
                <div className= "NavOptionsRight">
                <button className="Option">sign in</button>      
                </div>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar