import { useState } from "react"
import "./navigation.css"
import Logo from "../../assets/logo.png"

const Navigation = () => {
  const [isActive, setisActive] = useState(false)

  const HandleBurgerClick = () => {
    setisActive(!isActive)
  }
  return (
    <nav>
      <a href="#" className="logo">
        <img src={Logo} alt="logo de l'app"/>
      </a>
    <ul className={`navigation ${isActive ? 'active' : '' }`}>
    <li>
      <a href="#" className="active">Home</a>
    </li>
    <li>
      <a href="#">Produits</a>
    </li>
    <li>
      <a href="#">A propos</a>
    </li>
    <li>
      <a href="#">Contact</a>
    </li>
    </ul>
    <div className="nav-icons">
      <div className="icon-user">
        <ion-icon name="person"></ion-icon>
      </div>
      <div id="burger-menu" onClick={HandleBurgerClick}>
        <ion-icon name="menu-outline"></ion-icon>
      </div>
    </div>
    </nav>
  )
}

export default Navigation
