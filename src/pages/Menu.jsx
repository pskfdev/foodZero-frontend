import React from 'react'
import Formreserv from '../components/Formreserv'
import Header from '../components/Header'
import imgMenu from '../img/menu.png'

function Menu() {
  return (
    <>
      <Header img={imgMenu} head="View Our New Menu" title="The freshest ingredients for you every day."/>
      <Formreserv />
    </>
  )
}

export default Menu