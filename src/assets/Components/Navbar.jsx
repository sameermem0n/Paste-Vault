import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (

    
   <div className="flex items-center justify-between p-4 bg-gray-900 text-gray-200 shadow-md">
  {/* Logo + App Name */}
  <div className="flex items-center gap-2">
    <div className="w-8 h-8 flex items-center justify-center bg-sky-600 text-white font-bold rounded-md">
      P
    </div>
    <span className="font-bold text-lg">PasteVault</span>
  </div>

  {/* Centered Links */}
  <div className="flex items-center gap-6 mx-auto">
    <NavLink 
      to="/" 
      className={({ isActive }) => 
        `px-3 py-2 rounded-md transition-colors duration-200 
         ${isActive ? "bg-gray-700 text-white" : "hover:bg-gray-800 hover:text-white"}`
      }
    >
      Home
    </NavLink>

    <NavLink 
      to="/pastes" 
      className={({ isActive }) => 
        `px-3 py-2 rounded-md transition-colors duration-200 
         ${isActive ? "bg-gray-700 text-white" : "hover:bg-gray-800 hover:text-white"}`
      }
    >
      Pastes
    </NavLink>
  </div>
</div>


  )
}

export default Navbar