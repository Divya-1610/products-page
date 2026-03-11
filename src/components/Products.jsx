import React from 'react'
import Product from './Product'

function Products() {
  return (
    <div>
        <div className='bg-gray-300 text-3xl p-5 font-bold font-mono'>
            <h1>Products &gt;</h1>
        </div>
        <div className='p-10'>
            <Product />
        </div>
    </div>
  )
}

export default Products