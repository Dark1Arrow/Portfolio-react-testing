import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home'
import Project from './Components/Project'
import About from './Components/About'
import Contact from './Components/Contact'
function App() {

  const Router = createBrowserRouter([
    {
      path: "/Portfolio-react/",
      element: <><Home /></>
    },
    {
      path: "/Portfolio-react/Project",
      element: <><Project /></>
    },
    {
      path: "/Portfolio-react/About",
      element: <><About /></>
    },
    {
      path: "/Portfolio-react/Contact",
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
