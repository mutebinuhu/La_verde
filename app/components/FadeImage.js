"use client"
import React from 'react'
import { Fade } from 'react-awesome-reveal'

function FadeImage({url}) {
  return (
    <Fade delay={700} direction='right' >
    <img src={url} alt="Placeholder" className="hidden md:block bg-gray-100 h-96 w-96 " />
    </Fade>
  )
}

export default FadeImage