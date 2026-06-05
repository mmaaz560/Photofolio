import React from 'react'
import { useGlobal } from "./context/AppContext";
import { BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './component/Navbar';
import About from './Pages/About';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
const App = () => {
    const {colors} = useGlobal()
  return (
    <div className={`min-h-screen ${colors.bg}`}>
        <Router>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/services' element={<Services/>}/>
                <Route path='/contact' element={<Contact/>}/>

            </Routes>
        </Router>
    </div>
  )
}

export default App