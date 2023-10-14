import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome , faInfo , faUserAlt , faUserPlus , faBars , faX} from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"


const Header = () => {
  const [toggle,settoggle] = useState(false)
  const linksupdown = () => {
    settoggle(!toggle)
    const nav = document.querySelector("nav") 
    if (nav.classList.contains("clip-Path-closed")) {
      nav.classList.remove("clip-Path-closed")
      nav.classList.add("clip-Path-open")
    }else{
      nav.classList.add("clip-Path-closed")
      nav.classList.remove("clip-Path-open")

    }
    
  }
  return (
    <>
    
        <header className="bg-white relative">
            <div className="container flex justify-between items-center px-4">
              <NavLink className="flex items-center">
                <img src="/public/assests/logo.png" alt="logo" className="w-20"/>
                <div className="flex flex-col font-bold text-mr">
                  <p>DUBAI</p>
                  <p>DESERT</p>
                  <p>SAFARI</p>
                </div>
              </NavLink>
              <nav className="absolute  sm:static left-0 w-full sm:w-auto sm:bg-transparent sm:p-0 py-5 z-50 duration-500 bg-white top-full clip-Path-closed">
                <ul className="flex items-center gap-8  sm:flex-row flex-col ">
                  <li>
                    <NavLink to="/" className="flex items-center gap-2 font-bold hover:text-mr duration-500">
                    <FontAwesomeIcon icon={faHome} className="text-lg fa-fw" />
                      <p>Home</p>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/about"  className="flex items-center gap-2 font-bold hover:text-mr duration-500">
                      <FontAwesomeIcon icon={faInfo} className="text-lg fa-fw" />
                      <p>About</p>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/login" className="flex items-center gap-2 font-bold hover:text-mr duration-500">
                      <FontAwesomeIcon icon={faUserAlt } className="text-lg fa-fw" />
                      <p>Login</p>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/register" className="flex items-center gap-2 font-bold hover:text-mr duration-500">
                      <FontAwesomeIcon icon={faUserPlus} className="text-lg fa-fw" />
                      <p>Register</p>
                    </NavLink>
                  </li>
                </ul>
              </nav>
              {toggle ? <FontAwesomeIcon icon={faX} className="text-3xl fa-fw sm:hidden cursor-pointer font-bold " onClick={linksupdown}/> : <FontAwesomeIcon icon={faBars} className="text-3xl fa-fw sm:hidden cursor-pointer font-bold " onClick={linksupdown}/>}

            </div>
        </header>
    </>
  )
}

export default Header