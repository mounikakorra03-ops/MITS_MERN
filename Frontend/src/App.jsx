import {Routes,Route, Router} from 'react-router-dom'
import Navbar from "./componet/Navbar";
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Service from './pages/Service'
import Login from './Auth/Login'
import Signup from './Auth/Signup'
import Hook from './Hooks/Hook'
import UseCallback from './Hooks/UseCallback'
import UseEffect from './Hooks/UseEffect'
import UseEffectApi from './Hooks/UseEffectApi'
import UseMemo from './Hooks/UseMemo'
import UseReducer from './Hooks/UseReducer'
import UseRef from './Hooks/UseRef'
import UseState from './Hooks/UseState'

const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/'element={<Home name="mouni"/>}/>
        <Route path='/About' element={<About name="mouni" age={20} dept="CSD"/>}></Route>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Service' element={<Service/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/Signup' element={<Signup/>}/>
       {/* hooks */}
        <Route path='/hook' element={<Hook/>}>
        <Route path='useCallback' element={<UseCallback/>}/>
        <Route path='useEffect' element={<UseEffect/>}/>
        <Route path='useEffectApi' element={<UseEffectApi/>}/>
        <Route path='useMemo' element={<UseMemo/>}/>
        <Route path='useReducer' element={<UseReducer/>}/>
        <Route path='useRef' element={<UseRef/>}/>
        <Route path='useState' element={<UseState/>}/>
        
        
      </Route>
      </Routes>
    </>
  )
}

export default App