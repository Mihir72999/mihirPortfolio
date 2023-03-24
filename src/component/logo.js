import React from 'react'
import { Link } from 'react-router-dom'

const Logo = ()  => {
  return (
    <div>
          <div className="flex lg:flex-1 content-center" >
          <Link to="/home" className="-m-1.5 p-1.5 text-transparent">
            <span className="sr-only">Your Company</span>
            <img className="h-[5rem]  " src="/images/myLogo.jpeg" alt="" />
          </Link>
        </div>
    </div>
  )
}


export default Logo