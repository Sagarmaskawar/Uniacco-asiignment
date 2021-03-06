import React from 'react'
import './host.css'
const Host = () => {
  return (
    <div className='host'>
        <div className='namee'>
            Become a host
        </div>
        <div className='icon'><i  class="fa-solid fa-globe"></i></div>
        <div className='menu'>
       <div className='bars'> <i class="fa-solid fa-bars"></i></div>
            <svg width={102} height={32} fill="#FF000" className='svg'>
            <path d="m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1 -3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1 
            -3.019 5.491 12.42 12.42 0 0 1 6.452 4.4c-2.328 2.925-5.912 4.809-9.933 4.809z"></path>

            </svg>
        </div>
    </div>
  )
}

export default Host