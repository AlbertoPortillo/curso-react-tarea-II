import React, {useState} from 'react'
import { Box, useToast} from '@chakra-ui/react';
import FormCreation from './Components/FormCreation';
import { useOutletContext } from 'react-router-dom';
import { Navigate  } from "react-router-dom";

export default function Creation() {
  const [list, handleChange] = useOutletContext(); // <-- access context value
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const toast = useToast()
  const [shouldRedirect, setShouldRedirect] = useState(false)
  const [onSubmit, setonSubmit] = useState(false)
  
  function onCreate(){
    setonSubmit(true)
    if(!title){
      setonSubmit(false)
      return toast({
        title: `Fallo al escribir el titulo`,
        status: 'error',
        duration: 3000,
      })
    }else if(!body){
      setonSubmit(false)
      return toast({
        title: `Fallo al escribir el nombre`,
        status: 'error',
        duration: 3000,
      })
    }

    const newList = list
    newList.push({ titulo: title, body: body, date: Date()})
    handleChange(newList);

    toast({
        title: 'Blog Creado.',
        description: `El blog con titulo ${title} ha sido creado`,
        status: 'success',
        duration: 3000,
    })
    setTimeout(() => setShouldRedirect(true), 3000)
  }

  function onChange(event, title){
      if(title){
          setTitle(event.target.value)
      }else{
          setBody(event.target.value)
      }
  }
  return (
    <Box bg='white' width={'100%'} height={'90%'} overflow={'scroll'}>
      <FormCreation buttonActive={onSubmit} changes={onChange} submit={onCreate} titulo={title} cuerpo={body} />
      {shouldRedirect && <Navigate replace to="/" />}
    </Box>

  )
}
