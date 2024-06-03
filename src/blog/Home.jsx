import React, {useEffect} from 'react'
import { useOutletContext } from 'react-router-dom';
import { Box } from '@chakra-ui/react';

import Cards from './Components/Cards';

const exampleList = [ 
  "no quiero hacer tarea", 
  "Estoy haciendo tarea", 
  "que pereza todo esto", 
  "matame jebus"
]

export default function Home() {
  const [list, handleChange] = useOutletContext(); // <-- access context value

  useEffect(() => {
    handleChange(exampleList)
  }, [])
  
  return (
    <Box bg='white' width={'100%'} height={'100%'}>
        {
          list?.map((item, key) => <Cards key={`blog-card-${key}`} id={key} body={item} title={`titulo pruebas #${key}`} />)
        }

    </Box>
  )
}
