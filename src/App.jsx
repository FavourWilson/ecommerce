import { Route, Routes } from 'react-router-dom'
import Home from './components/templates/home'
import UserProfile from './components/templates/profile'
import AddProduct from './components/templates/AddProduct'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={Home} />
        <Route path='/profile' element={UserProfile} />
        <Route path='/addproduct' element={AddProduct} />
      </Routes>
    </>
  )
}

export default App
