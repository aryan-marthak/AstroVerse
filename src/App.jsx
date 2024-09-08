import React from 'react'
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Contact from "./components/Contact"
import About from "./components/About"
import {createBrowserRouter, RouterProvider} from 'react-router-dom'


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar/><Home/></>
    },
    {
      path: "/about",
      element: <><Navbar/><About/></>
    },
    {
      path: "/contact",
      element: <><Navbar/><contact/></>
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App