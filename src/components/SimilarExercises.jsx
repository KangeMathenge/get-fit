import {Box, Stack, Typography} from '@mui/material'
import HorizontalScrollbar from './HorizontalScrollbar'
import Loader from './Loader'


function SimilarExercises({targetMuscleExercises,equipmentExercises}) {
  return (
    <Box sx={{mt:{lg:'100px',xs:'0'}}}>
        <Typography variant="h5" mb={5}>
            Exercises that target the same muscle group
        </Typography>
        <Stack direction="row" sx={{p:'2',position:'relative'}}>
            {targetMuscleExercises.length !==0  ? <HorizontalScrollbar data={targetMuscleExercises}/>:
            <Loader/>
            }
        </Stack>
        <Typography variant="h5" mb={5} mt={4}>
            Exercises that use the same equipment
        </Typography>
        <Stack direction="row" sx={{p:'2',position:'relative'}}>
            {equipmentExercises.length !==0  ? <HorizontalScrollbar data={equipmentExercises}/>:
            <Loader/>
            }
        </Stack>
    </Box>
  )
}

export default SimilarExercises