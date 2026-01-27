import { Routes,Route } from 'react-router-dom'
import Navbar from './component/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Service from './pages/Service'
const App = () => {
    return(

        <>

        <Navbar/>
        <Routes>
        <Route path='/'element={<Home name="mouni"/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' elements={<Contact/>}/>
        <Route path='/service' element={<Service/>}/>

        </Routes>


        </>
    )
    
}
export default App
