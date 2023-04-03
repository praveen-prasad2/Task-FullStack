import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Addtask from './Components/Addtask'
import AllTask from './Components/AllTask'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

function App() {


  return (
   <BrowserRouter>
   <Routes>
    <Route path='' element={<Addtask />} />
    <Route path='/alltask' element={<AllTask />} />
   </Routes>
   </BrowserRouter>
  )
}

export default App
