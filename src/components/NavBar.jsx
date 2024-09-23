import React from 'react'
/*Importo el CSS correspondiente a la Barra de navegacion*/ 
import '../styles/navbar.css'
import CartWidget from './CartWidget'

const NavBar = () => {
  return (
    <ul>
        <li><a href="">Inicio</a></li>
        <li><a href="">Menú</a></li>
        <li><a href="">Reseñas</a></li>
        <li><a href="">Acerca de</a></li>
        {/*Importo CartWidget para utilizarlo dentro de la NavBar*/}
        <li><a><CartWidget/></a></li>
    </ul>
  )
}

export default NavBar