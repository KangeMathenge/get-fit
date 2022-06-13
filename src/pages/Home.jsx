import {useState} from 'react'
import {Box} from '@mui/material'

import HeroBanner from '../components/HeroBanner'
import SearchExercise from '../components/SearchExercise'
import Exercises from '../components/Exercises'
function Home() {
  const [bodyPart, setBodyPart] = useState('all')
  const [exercises, setExercises] = useState([])
  console.log(bodyPart)
  return (
    <Box>
      <HeroBanner/>
      <SearchExercise 
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
        />
      <Exercises
        exercises={exercises}
        setExercises={setExercises}
        bodyPart={bodyPart}
      
      />
    </Box>
  )
}

export default Home