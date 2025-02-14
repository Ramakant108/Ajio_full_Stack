import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-cols sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
            <h1 className='text-3xl'>AJIO</h1>
            <p className='w-full md:w-2/3 text-gray-600 '>AJIO brings you the latest fashion trends with a curated selection of stylish apparel, footwear, and accessories for men, women, and kids. We are committed to providing high-quality products at unbeatable prices, ensuring a seamless shopping experience with easy returns, secure payments, and fast delivery. Explore a wide range of ethnic wear, casual outfits, and premium brands all in one place. Stay ahead of the fashion curve with AJIO—your ultimate style destination!</p>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
              <Link to={'/'}>
                 <li>Home</li>
              </Link>
              <Link to={'/about'}>
                <li>About us</li>
              </Link>
                
            </ul>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+1-212-456-7890</li>
                <li>contact@ajio.com</li>
            </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyrights 2024@ ajio.com - All Rights Reserved.</p>
      </div>

    </div>
  )
}

export default Footer
