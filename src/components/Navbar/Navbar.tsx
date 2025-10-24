import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { GiTakeMyMoney } from "react-icons/gi";
import NavDropdown from "../NavDropdown/NavDropdown";


const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
     const navigate = useNavigate();
     const navigateTo = (path: string) => {
     navigate(path);
    
  };
  return (
    <>
     <nav className="nav">
                <NavLink to={""} className="logoWrapper">
                    <div className="logo">
                    <GiTakeMyMoney fill="#FFF"/> <NavLink to={"/"}>Evenza</NavLink>
                    </div>
                </NavLink>
                <div className="navCenter">
                <div className="inputWrapper">
                    < IoSearchSharp/>
                    <input type="text" placeholder="Search" />
                    
                </div>
                <button>Search</button>
                </div>
                <div className="navRight">
                    <ul>
                       
                        <NavLink to={"/login"}>Login</NavLink>
                        <NavLink to={"/signup"}>Signup</NavLink>
                        <NavLink to={"/bookinglist"}>Booking List</NavLink>
                        <NavDropdown
            label="Events"
            items={[
              { label: "Create Event", onClick: () => navigateTo("/createevents") },
              { label: "Book Event", onClick: () => navigateTo("/bookevent") },
              { label: "All Event", onClick: () => navigateTo("/allevents") },
            ]}
          />
                        
                    </ul>

                </div>
                {showMenu?<IoCloseSharp className="displaynav" fill="#FFF" onClick={()=>{setShowMenu(!showMenu)}}/> : <GiHamburgerMenu className="displaynav" fill="#FFF" onClick={()=>{setShowMenu(!showMenu)}}/>  }
                {showMenu &&(
                 <div className="hamburger">
                 <ul>
                 
                     
                     <li><NavLink to={"/login"}>Login</NavLink></li>
                    <li><NavLink to={"/signup"}>Signup</NavLink></li>
                     <li><NavLink to={"/bookinglist"}>Booking List</NavLink></li>
                 </ul>
             </div>   
                )}
                
            </nav> 
    </>
  )
}

export default Navbar
