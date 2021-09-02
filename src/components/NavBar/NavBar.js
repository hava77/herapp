import './NavBar.css'

const NavBar=()=>{
    return(
        <nav className="NavBar">
            <div className="LeftNav">
                <div className="NavOptionsLeft">
                    <button className="Option">Home</button>
                    <button className="Option">Nosotros</button>
                    <button className="Option">Products</button>
                </div>
            </div>
            <div className="RightNav">
                <div className= "NavOptionsRight">
                <button className="Option">sign in</button>      
                </div>
            </div>
        </nav>
    )
}

export default NavBar