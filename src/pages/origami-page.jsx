import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { OrigamiAPI } from '../api/origami/origami'
import Box from '@mui/material/Box'

export function OrigamiPage() {
  const { id } = useParams()
  const [data, setData] = useState()
  useEffect(() => {
    OrigamiAPI.getOrigamieById(id).then((res) => {
      setData(res)
    })
  }, [])
  if (!data) return <>Loading...</>
  console.log(data)
  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      minHeight={'100vh'}
    >
      <Box width={'100%'} maxWidth={1400}>
        <Box
          width={'100%'}
          minHeight={100}
          bgcolor={'#264653'}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          marginBottom={1}
          borderRadius={'0 0 10px 10px'}
        >
          <Box
            width={'90%'}
            fontSize={42}
            fontWeight={1000}
            color={'white'}
            textAlign={'center'}
          >
            Инженерное оригами
          </Box>
        </Box>
        <Box
          display={'flex'}
          flexDirection={'column'}
          alignItems={'center'}
          justifyContent={'center'}
        >
          <Box
            width={256}
            height={256}
            sx={{
              backgroundImage: 'url(' + data.mainPhoto + ');',
              backgroundSize: 'cover'
            }}
          ></Box>
          <Box fontSize={28}>{data.name}</Box>
          <Box fontSize={28}>{'★'.repeat(data.difficulty)}</Box>
          <Box fontSize={28} textAlign={'center'}>
            {'В данной модели всего ' + data.count_steps + ' шагов. '}
          </Box>
          <Box
            fontSize={28}
            textAlign={'center'}
            marginTop={5}
            paddingX={2}
            paddingY={1}
            color={'white'}
            borderRadius={'10px'}
            bgcolor={'#F4A261'}
          >
            Продолжить
          </Box>
        </Box>
      </Box>
      <Box display={'flex'} flexGrow={1}></Box>
      <Box
        marginTop={5}
        minHeight={50}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        bgcolor={'black'}
        color={'white'}
        width={'100%'}
      >
        <Box>© ДонНТУ 2024</Box>
      </Box>
    </Box>
  )
}
