import NavBarLink from "./NavBarLink"
import "./style.css"
const NavBar = ({ handelLogin, handelLogOut }) => {


    return (
        <nav >
            <ul className="List">
                <NavBarLink path='/' text="Home" />
                <NavBarLink path='/admin' text="Admin Dashbord" />
                <NavBarLink path='/products' text="Products" />
                <NavBarLink path='/category' text="Category" />
                <button onClick={handelLogin}>Login</button>
                <button onClick={handelLogOut}>Logout</button>
            </ul>



        </nav>
    )
}

export default NavBar