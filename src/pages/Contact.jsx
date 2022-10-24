import React from 'react'
import Formreserv from '../components/Formreserv'
import Header from '../components/Header'
import imgContact from '../img/Hcontact.png'

function Contact() {
  return (
    <>
      <Header img={imgContact} head="Get in Touch" title="The freshest ingredients for you every day"/>
      <Formreserv />
    </>
  )
}

export default Contact