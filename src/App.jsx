import {Route, Routes} from 'react-router-dom'
import {Box} from '@mui/material'

import './App.css'

import ExerciseDetail from './pages/ExerciseDetail'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <Box width="400px" sx={{width:{xl:'1488px'}}} m="auto">
        <Navbar/>
        <Routes>
            <Route path='/get-fit' element={<Home/>}/>
            <Route path='/get-fit/exercise/:id' element={<ExerciseDetail/>}/>
        </Routes>
        <Footer/>
    </Box>
  )
}

export default App