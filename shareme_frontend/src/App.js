import React from 'react'
import {Routes,Route,useNavigate, Router} from 'react-router-dom'
import Login from './component/Login'
import Home from './container/Home'

export default function App() {
    return (
     <Routes>
        <Route path='login' element={<Login/>}/>
        <Route path='/*' element={<Home/>}/>
     </Routes>
    )
  }

