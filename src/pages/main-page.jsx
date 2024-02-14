import { React, useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import { OrigamiAPI } from '../api/origami/origami'
import { origamiShowComponent } from '../components/origami-show'
export function MainPage() {
  const [listOrigamies, setListOrigamies] = useState([])
  var tmp = []
  useEffect(() => {
    OrigamiAPI.getListOrigamies().then((res) => {
      var tmp = []
      res.forEach((element) => {
        tmp.push(origamiShowComponent(element))
      })
      setListOrigamies(tmp)
    })
  }, [])

  if (listOrigamies == []) {
    return <>Загрузка</>
  } else {
    return (
      <Box display={'flex'} flexDirection={'column'} minHeight={'100vh'}>
        <Box width={'100%'}>
          <Box
            width={'100%'}
            minHeight={100}
            bgcolor={'#264653'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            marginBottom={1}
          >
            <Box
              width={'90%'}
              fontSize={48}
              fontWeight={1000}
              color={'white'}
              textAlign={'center'}
            >
              Инженерное оригами
            </Box>
          </Box>
          <Box
            display={'flex'}
            gap={4}
            flexWrap={'wrap'}
            justifyContent={'center'}
          >
            {listOrigamies}
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
        >
          <Box>© ДонНТУ 2024</Box>
        </Box>
      </Box>
    )
  }
}
