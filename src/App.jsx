import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import Project from './Components/Project'
import About from './Components/About'
import Contact from './Components/Contact'
function App() {

  // const Router = createBrowserRouter([
  //   {
  //     path: "/Portfolio-react/",
  //     element: <><Home /></>
  //   },
  //   {
  //     path: "/Portfolio-react/Project",
  //     element: <><Project /></>
  //   },
  //   {
  //     path: "/Portfolio-react/About",
  //     element: <><About /></>
  //   },
  //   {
  //     path: "/Portfolio-react/Contact",
  //     element: <><Contact /></>
  //   },
  // ])
  {/* 
  <RouterProvider router={Router} /> */}

  return (
    <>
      <div className='bg-[#111111] text-white' style={{ font: "popins" }}>


        <HashRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Project" element={<Project />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </HashRouter>

      </div>
    </>
  )
}

export default App
