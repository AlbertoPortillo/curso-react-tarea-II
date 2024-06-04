import React, {useEffect, useState} from 'react'
import { useOutletContext, useParams, Link } from 'react-router-dom';
import { Box, Text } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons'
export default function Edit() {
  const [list] = useOutletContext(); // <-- access context value
  const {id} = useParams();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [fecha, setFecha] = useState("");

  useEffect(() => {
    console.log("🚀 ~ useEffect ~ id:", id, typeof id, id ?list[Number(id)]?.titulo :"false")
    if(id){
      orderText()
    }
  }, [id])
    console.log("🚀 ~ useEffect ~ list:", list)

  async function orderText(){
    await setTitle(list[Number(id)]?.titulo)
    await setBody(list[Number(id)]?.body)
    await setFecha(list[Number(id)]?.date)
  }
  

  return (
    <Box bg='white' width={'100%'} height={'90%'} overflow={'scroll'}>
      <Box marginX={'25%'} marginY={'3%'}>
        <Link to="/">
          <ArrowBackIcon w={8} h={8}/>
        </Link>
      </Box>
      <Box border={"solid"} borderRadius={'20px'} padding={'2%'} width={'50%'} height={'70%'} marginX={'25%'} marginY={'3%'} >
        <Text height={'20%'} fontSize='6xl' overflow={'scroll'}>{title}</Text>
        <Text height={'70%'} fontSize='2xl' overflow={'scroll'}>{body}</Text>
        <Text height={'5%'} marginTop={'5%'} fontSize='xs'>{fecha}</Text>
      </Box>
    </Box>
  )
}
