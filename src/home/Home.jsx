import React, {useState} from 'react'
import { Outlet } from "react-router-dom";
import {
  Box,
  Flex,
  Stack,
  Input,
  Spacer,
  Button
} from '@chakra-ui/react';
import { Link } from "react-router-dom";
export default function Home() {

  const [list, setList] = useState([]);

  function handleChange(newList){
    setList(newList)
  }

  return (
    <Box bg={'black'} width={'100vw'} height={'100vh'}>
      <Box borderBottom={'solid '} borderBottomColor={'white'} bg={'black'}width={'100%'} h="10%" px={4}>
        <Flex width={'100%'} alignItems={'center'} justifyContent={'space-between'}>
              <Box color={'white'} p='4'>
                <Link to="/">
                  Blog de Tarea
                </Link>
              </Box>
              <Spacer />
              <Box>
                <Stack direction={'row'} p='4' spacing={7}>
                  <Link to="/new-post">
                    <Button variant='outline' padding={'25px'} colorScheme='whiteAlpha'>Crear Nota</Button>
                  </Link>
                  <Input border={'solid'} color={'black'} borderColor={'gray'} variant='outline' placeholder='Buscar' size='lg' />
                </Stack>
              </Box>
        </Flex>
      </Box>
      <Outlet context={[list, handleChange]} />
    </Box>
  )
}
