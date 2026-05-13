import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, RouterProvider,createBrowserRouter } from 'react-router-dom'
import './index.css'
import Home from './pages/Home'
import Project from './pages/Project'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './Components/common/Navbar'
import Footer from './Components/common/Footer'
import ProjectDetails from './pages/ProjectDetails'

const Router = createBrowserRouter([
  {
    path: "/",
    element: <><Home /><Footer/></>
  },
  {
    path: "/Project",
    element: <><Navbar/><Project /><Footer/></>
  },
  {
    path: "/About",
    element: <><Navbar/><About /><Footer/></>
  },
  {
    path: "/Contact",
    element: <><Navbar/><Contact /><Footer/></>
  },
  {
    path: "/ProjectDetails",
    element: <>/<ProjectDetails /><Footer/></>
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Montagu+Slab:opsz,wght@16..144,100..700&display=swap');
    </style>
    
    <RouterProvider router={Router} />
  </StrictMode>,
)
