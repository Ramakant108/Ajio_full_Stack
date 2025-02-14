import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-cols sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
            <h1 className='text-3xl'>AJIO</h1>
            <p className='w-full md:w-2/3 text-gray-600 '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda totam explicabo quo error illo ex deserunt quidem harum fuga provident est quibusdam, officiis, voluptatem nobis? Nulla molestiae sequi, commodi rem necessitatibus aperiam? Explicabo molestias molestiae quo dolore itaque! Ullam, id.</p>
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
