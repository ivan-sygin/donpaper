import { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { OrigamiAPI } from '../api/origami/origami'
import Box from '@mui/material/Box'

export function StagesPage() {
  const { id, stage } = useParams()
  const navigate = useNavigate()
  const [data, setData] = useState()
  console.log(id, stage)
  useEffect(() => {
    OrigamiAPI.getOrigamieById(id).then((res) => {
      setData(res)
    })
  }, [])

  if (!data) return <>Loading...</>
  var finished = false
  if (stage == data.count_steps + 1) finished = true
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
          <InsideComponent
            stage={stage}
            data={data}
            finished={finished}
          ></InsideComponent>
          <div
            onClick={() => {
              if (stage <= data.count_steps)
                navigate('/' + id + '/' + (Number(stage) + 1))
              else navigate('/')
            }}
          >
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
          </div>
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

function InsideComponent({ stage, data, finished = false }) {
  if (!finished)
    return (
      <>
        <Box
          width={256}
          height={256}
          sx={{
            backgroundImage: 'url(' + data.mainPhoto + ');',
            backgroundSize: 'cover'
          }}
        ></Box>
        <Box fontSize={28} textAlign={'center'}>
          {data.desc_process[stage - 1]}
        </Box>
      </>
    )
  else {
    return (
      <>
        <Box
          width={256}
          height={256}
          sx={{
            backgroundImage: 'url(' + data.mainPhoto + ');',
            backgroundSize: 'cover'
          }}
        ></Box>
        <Box fontSize={28} textAlign={'center'}>
          {'Вы закончили! Поздравляю'}
        </Box>
      </>
    )
  }
}
