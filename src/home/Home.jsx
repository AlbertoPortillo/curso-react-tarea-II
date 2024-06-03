import React, {useState} from 'react'
import { Outlet } from "react-router-dom";
import {
  Box,
  Flex,
  Stack,
  Input,
  Spacer 
} from '@chakra-ui/react';
export default function Home() {

  const [list, setList] = useState([]);

  function handleChange(newList){
    setList(newList)
  }

  return (
    <Box bg={'black'} width={'100vw'} height={'100vh'}>
      <Box borderBottom={'solid '} borderBottomColor={'white'} bg={'black'}width={'100%'} px={4}>
        <Flex width={'100%'} h={16} alignItems={'center'} justifyContent={'space-between'}>
            <Box color={'white'} p='4'>Logo</Box>
              <Spacer />
              <Box>
                <Stack direction={'row'} p='4' spacing={7}>
                  <Input border={'solid'} color={'black'} borderColor={'black'} variant='outline' placeholder='Buscar' size='lg' />
                </Stack>
              </Box>
        </Flex>
      </Box>
      <Outlet context={[list, handleChange]} />
    </Box>
  )
}
