import { Link } from "react-router-dom";
import "./css/navbar.css"
export default function NavBar(){

    return(
        <>
        <div className="topnav">
            <span className="app-brand"> Optionizer</span>
            <Link to="/customer">Customer</Link>
            <Link to="/main">Main Menu</Link>
            <Link to="/summary">Summary</Link>
            <Link to="/admin">Administration</Link>
        </div>
        </>
    )
}