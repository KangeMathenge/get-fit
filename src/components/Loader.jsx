import {Stack} from '@mui/material'
import {InfinitySpin} from 'react-loader-spinner'

function Loader() {
  return (
    <Stack direction="row" justifyContent="center" alignItems="center" width="100px">
         <InfinitySpin/>   
    </Stack>
  )
}

export default Loader