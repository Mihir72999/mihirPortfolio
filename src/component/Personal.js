import React from 'react'
import App from '../App'

const Personal = () => {
  return (
    
        <>
        
        <App/>
        
        <section className="bg-gray-800 px-5 py-32 lg:py-[37vh]" id="contact">
        <div className="text-center md:w-[60%] mx-auto text-white">
        <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[200px] mx-auto border-indigo-600 pb-2">
          Contact Me
        </h2>
        <p>
          I am currently open for a fulltime Frontend Developer role. If you
          want to discuss about that feel free to email me or call me.
        </p>

        <p className="py-2">
          <span className="font-bold">Email:</span> mihir72999@gmail.com
        </p>
        <p className="py-2">
          <span className="font-bold">Phone:</span> +91 9033667299
                 {''}  +91 8200229369

        </p>
      </div>
       </section>
        </>
        
  )
}

export default Personal