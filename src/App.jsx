import './App.css'
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'

import Home from './Pages/Home'
import Category from './Pages/Category'
import Products from "./Pages/Products"
import Admin from './Pages/Admin'
import NavBar from './Components/NavBar/NavBar'
import Protected from './Components/Protected'



function App() {

  const [loggedIn, setloggedIn] = useState(false)


  const handelLogin = () => {

    return setloggedIn(true)
  }
  const handelLogOut = () => {


    return setloggedIn(false)
  }



  return (



    <>
      <NavBar handelLogin={handelLogin} handelLogOut={handelLogOut} />


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/products" element={<Products />} />

        <Route path='/admin' element={
          <Protected loggedIn={loggedIn}>
            <Admin />
          </Protected>} />

      </Routes>
    </>
  )

}






export default App
