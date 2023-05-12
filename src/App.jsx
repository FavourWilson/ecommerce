import { Route, Routes } from 'react-router-dom'
import Home from './components/templates/home'
import UserProfile from './components/templates/profile'
import AddProduct from './components/templates/AddProduct'
import Uploads from '../uploads/1683816020687-hero-img.jpg'

function App() {
 

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/profile' element={<UserProfile/>} />
        <Route path='/addproduct' element={<AddProduct/>} />
        <Route path='/uploads' element={<Uploads/>} />
      </Routes>
    </>
  )
}

export default App
