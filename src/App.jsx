import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import './index.css'
import { createBrowserRouter } from 'react-router-dom'
import Home from './assets/Components/Home'
import Paste from './assets/Components/Paste'
import ViewPaste from './assets/Components/ViewPaste'
import Navbar from './assets/Components/Navbar'
import { RouterProvider } from 'react-router-dom'



const router = createBrowserRouter(
  [


    {
      path: '/',
     element:
     <div>
      <Navbar />
      <Home />
     </div>   
    },
    

    {
        path: '/pastes',
     element:
     <div>
      <Navbar />
      <Paste />
        
     </div>   
    },

    {
        path: '/pastes/:id',
     element:
     <div>
      <Navbar />
      <ViewPaste />
        
     </div>   
    },
]
)


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
};

export default App
