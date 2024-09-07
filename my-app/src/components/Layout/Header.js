import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const Header = () => {

  return (
    <div className='h-16 bg-fuchsia-950'>
      <div className=' h-full container mx-auto flex items-center px-4 justify-between'>
        <h1 className='text-white font-bold text-3xl '>Table Sprint</h1>

        <div className='flex items-center gap-7'>
          <button className='px-3 py-1 rounded-full text-white bg-red-600 hover:bg-red-700'>Logout</button>
          <div>

            
          </div>
        </div>
      </div>
    </div>

  )
}

export default Header
