import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsDribbble} from 'react-icons/bs'

export const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/jorge-marín-98778459/" target="_blank" rel="noopener noreferrer"><BsLinkedin /></a>
        <a href="https://github.com/RubioDeLimon" target="_blank" rel="noopener noreferrer"><BsGithub /></a>
        <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer"><BsDribbble /></a>
    </div>
  )
}

export default HeaderSocials