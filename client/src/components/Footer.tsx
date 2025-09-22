import React from 'react'

const Footer = () => {
  return (
    <footer className='h-[100vh] bg-white'>
        <ul>
            <li>INICIO</li>
            <li>MI CUENTA</li>
        </ul>

        <ul>
            <svg>
                <use href="/sprite.svg#facebook"/>
            </svg>
        </ul>
    </footer>
  )
}

export default Footer