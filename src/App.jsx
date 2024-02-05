import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import NavBar from './NavBar'
import MainMenu from './MainMenu'
import Summary from './Summary'
import Administration from './Administration'
import Customer from './Customer'
function App() {

  return (
    <>
    <Router>
      <NavBar/>
      <Routes>
      <Route path="/" element={<Customer/>}/>
        <Route path="/customer" element={<Customer/>}/>
        <Route path="/main" element={<MainMenu/>}/>
        <Route path="/summary" element={<Summary/>}/>
        <Route path="/admin" element={<Administration/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
