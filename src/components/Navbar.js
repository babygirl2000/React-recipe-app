import { Link,useLocation } from "react-router-dom";
import { useState } from "react";
import Sidebar from "./Sidebar";
import { faHome, faList, faCog } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    let [showSidebar, setShowSidebar] = useState(false)
    const links = [
        {
            name: "Home",
            path: "/",
            icon: faHome
        },
        {
            name: "Recipes",
            path: "/recipes",
            icon: faList
        },
        {
            name: "Settings",
            path: "/settings",
            icon: faCog
        },
    ]
    function closeSidebar(){
        setShowSidebar(false)
    }
    const location = useLocation()
    console.log(location)

    return ( 
        <>
            <div className="navbar container">
                <Link to="/" className="logo">Reci<span>pe</span>Home</Link>
                <div className="nav-links">
                    { links.map(link => (
                        <Link className={location.pathname === link.path? "active": ""} to={link.path} key={link.name}>{link.name}</Link>
                    ))}
                </div>

                <div 
                onClick={()=> setShowSidebar(showSidebar = !showSidebar)} 
                className={showSidebar ? "sidebar-btn active" : "sidebar-btn"}
                >
                    <div className="bar"></div> 
                    <div className="bar"></div>
                    <div className="bar"></div>

                </div>
            </div>

            {showSidebar && <Sidebar links = {links} close = {closeSidebar}/>}
        </>
     );
}
 
export default Navbar;