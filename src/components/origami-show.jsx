import Box from '@mui/material/Box'
import { Button } from '@mui/material'
import { OrigamiShow } from '../api/classes/origamiShow'
/**
 * @param {OrigamiShow} origami - The date
 */
export function origamiShowComponent(origami) {
  let stars = '★'.repeat(origami.difficulty)
  let colorStars = { 1: 'green', 2: 'blue', 3: 'red', 4: 'purple', 5: 'black' }
  return (
    <div key={origami.id}>
      <Box
        minHeight={250}
        width={200}
        bgcolor={'#F5F5F5'}
        display={'flex'}
        justifyContent={'start'}
        paddingTop={1}
        alignItems={'center'}
        flexDirection={'column'}
        borderRadius={'10px'}
      >
        <Box
          height={180}
          width={180}
          sx={{
            backgroundImage: 'url("' + origami.mainPhoto + '");',
            backgroundSize: 'cover'
          }}
        ></Box>
        <Box textAlign={'left'}>{origami.name}</Box>
        <Box width={'90%'}>
          <Box display={'flex'} flexDirection={'space-between'} width={'100%'}>
            <Box textAlign={'left'} color={colorStars[origami.difficulty]}>
              {stars}
            </Box>
            <Box
              textAlign={'right'}
              color={'gray'}
              width={'100%'}
              fontSize={10}
            >
              {origami.timeToSolve}
            </Box>
          </Box>
        </Box>
        <Box paddingY={1}>
          <Box
            bgcolor={'#F4A261'}
            borderRadius={10}
            paddingX={2}
            paddingY={1}
            color={'white'}
            sx={{ cursor: 'pointer' }}
          >
            Начать сборку
          </Box>
        </Box>
      </Box>
    </div>
  )
}
