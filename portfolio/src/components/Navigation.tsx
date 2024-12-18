import React from 'react'

const Navigation = () => {
  return (
    <nav 
      className='flex h-20 px-10 fixed top-0 left-0 right-0 z-50 bg-opacity-20 backdrop-blur-md bg-[#07262d]'
      id='navigation'
    >
      <ul className='flex h-full w-full flex-row font-thin items-center text-lg gap-10 text-[#b7c9cd]'>
        <li className='text-lg font-medium'><a href="#Main">{`< Brandon />`}</a></li>
        <li><a href="#About">Acerca de mi</a></li>
        <li><a href="#Projects">Proyectos</a></li>
        <li><a href="#Contact">Contáctame</a></li>
      </ul>
    </nav>
  )
}

export default Navigation

