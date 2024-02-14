import { React, useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import { OrigamiAPI } from '../api/origami/origami'
import { OrigamiShowComponent } from '../components/origami-show'
export function MainPage() {
  const [listOrigamies, setListOrigamies] = useState([])
  const [filterStars, setFilterStars] = useState(0)
  var star_colors = ['gray', 'gray', 'gray', 'gray', 'gray']
  if (filterStars == 1) star_colors = ['green', 'gray', 'gray', 'gray', 'gray']
  if (filterStars == 2) star_colors = ['blue', 'blue', 'gray', 'gray', 'gray']
  if (filterStars == 3) star_colors = ['red', 'red', 'red', 'gray', 'gray']
  if (filterStars == 4)
    star_colors = ['purple', 'purple', 'purple', 'purple', 'gray']
  if (filterStars == 5)
    star_colors = ['black', 'black', 'black', 'black', 'black']

  useEffect(() => {
    OrigamiAPI.getListOrigamies().then((res) => {
      console.log(res)
      setListOrigamies(res)
    })
  }, [])

  if (listOrigamies == []) {
    return <>Загрузка</>
  } else {
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
            flexDirection={'row'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <div
              onClick={() => {
                if (filterStars != 1) setFilterStars(1)
                else setFilterStars(0)
              }}
            >
              <Box fontSize={30} color={star_colors[0]}>
                ★
              </Box>
            </div>
            <div
              onClick={() => {
                if (filterStars != 2) setFilterStars(2)
                else setFilterStars(0)
              }}
            >
              <Box fontSize={30} color={star_colors[1]}>
                ★
              </Box>
            </div>
            <div
              onClick={() => {
                if (filterStars != 3) setFilterStars(3)
                else setFilterStars(0)
              }}
            >
              <Box fontSize={30} color={star_colors[2]}>
                ★
              </Box>
            </div>
            <div
              onClick={() => {
                if (filterStars != 4) setFilterStars(4)
                else setFilterStars(0)
              }}
            >
              <Box fontSize={30} color={star_colors[3]}>
                ★
              </Box>
            </div>
            <div
              onClick={() => {
                if (filterStars != 5) setFilterStars(5)
                else setFilterStars(0)
              }}
            >
              <Box fontSize={30} color={star_colors[4]}>
                ★
              </Box>
            </div>
          </Box>
          <Box
            display={'flex'}
            gap={4}
            flexWrap={'wrap'}
            justifyContent={'center'}
          >
            {listOrigamies
              .filter(
                (val) => filterStars == 0 || filterStars == val.difficulty
              )
              .map((element) => (
                <OrigamiShowComponent origami={element} />
              ))}
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
}
