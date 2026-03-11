import React from 'react'

function Navbar() {
  return (
    <div className='flex flex-wrap bg-black text-white justify-between p-5'>
        <div className='bg-white rounded-full text-black p-2'>
            <h1>Ecommerce</h1>
        </div>
        <div className='flex justify-evenly gap-9 mr-10 cursor-pointer'>
            <h2>Categories</h2>
            <h2>Profile</h2>
        </div>
    </div>
  )
}

export default Navbar