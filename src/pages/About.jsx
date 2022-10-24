import React from 'react'
import Formreserv from '../components/Formreserv'
import Header from '../components/Header'
import imgAbout from '../img/Habout.png'

function About() {
  return (
    <>
      <Header img={imgAbout} head="Who We Are" title="The most important thing for us is to give you the comfortable dining experience"/>
      <Formreserv />
    </>
  )
}

export default About