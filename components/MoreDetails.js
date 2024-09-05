import React from 'react'
import { AttentionSeeker, Fade } from 'react-awesome-reveal'
import { FaRightLong } from 'react-icons/fa6'

export default function MoreDetails() {
  return (
   <Fade delay={2000} cascade>
     <div className="flex items-center justify-between">
    <p className="text-sm">MORE DETAILS</p>
   <AttentionSeeker effect='shakeX' delay={5000}>
    <span className="material-icons"><FaRightLong/></span>
   </AttentionSeeker>
  </div>
   </Fade>
  )
}
