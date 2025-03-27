import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Login from './Components/Login'
import Register from './Components/Register'
import UserList from './Components/UserList'
import ItemsList from './Components/ItemsList'
import ItemForm from './Components/ItemForm'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home2 from './Components/Home2'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<Register/>}/>
        <Route path='/userlist' element={<UserList/>}/>
        <Route path='/itemlist' element={<ItemsList/>}/>
        <Route path='/itemform' element={<ItemForm/>}/>
        <Route path='/home2' element={<Home2/>}/>
      </Routes>
    </div>
  )
}

export default App
