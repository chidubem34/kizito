import React from 'react'
import { BsInstagram, BsGithub } from 'react-icons/bs'

const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a
                href="https://github.com/chidubem34"
                target='_blank'
            >
                <BsGithub />
            </a>

            <a
                href="https://instagram.com"
                target='_blank'
            >
                <BsInstagram />
            </a>
        </div>
    )
}

export default HeaderSocials