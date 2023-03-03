import React from 'react'

const Footer = () => {
  return (
    <div className="absolute bottom-0 bg-slate-900 text-white inset-x-0 md:text-md text-sm py-4 text-center font-mono mt-20">
      
      <h1 className = " text-lg">Connect with us:</h1>
      <div className="grid md:grid-cols-3 grid-cols-1 mt-2 gap-4">
        <div className="hover:text-yellow-400 cursor-pointer"><a href="https://www.linkedin.com/in/monu-kumari/"><ion-icon name="logo-linkedin"></ion-icon> LinkedIn</a></div>
        <div className="hover:text-yellow-400 cursor-pointer"><a href="https://github.com/monukri4548"><ion-icon name="logo-github"></ion-icon> Github</a></div>
        <div className="hover:text-yellow-400 cursor-pointer"><a href="https://leetcode.com/Monu_Kumari/"><ion-icon name="logo-leetcode"></ion-icon> Leetcode</a></div>
      </div>
      <h2 className = "mt-4">Developed using <span className="text-yellow-400">React, CSS</span> and <span className="text-yellow-400">Auth0</span></h2>
    </div>
  )
}

export default Footer