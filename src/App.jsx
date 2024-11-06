import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home'
import Project from './Components/Project'
import About from './Components/About'
import Contact from './Components/Contact'
function App() {

  const Router = createBrowserRouter([
    {
      path: "/",
      element: <><Home /></>
    },
    {
      path: "/Project",
      element: <><Project /></>
    },
    {
      path: "/About",
      element: <><About /></>
    },
    {
      path: "/Contact",
      element: <><Contact /></>
    },
  ])

  return (
    <>
      <div className='bg-[#111111] text-white' style={{font: "popins"}}>

        <RouterProvider router={Router} />

      </div>
    </>
  )
}

export default App
