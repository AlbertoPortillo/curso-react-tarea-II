import React, {useState} from 'react'
import {
    FormControl,
    FormLabel,
    Input,
    Button,
    Box
  } from '@chakra-ui/react';


export default function FormCreation({ changes, submit, titulo, cuerpo, buttonActive}) {

  return (
    <Box width={'50%'} marginX={'25%'} marginY={'3%'} >
        <FormControl margin={"2%"}>
            <FormLabel>Titulo</FormLabel>
            <Input onChange={(e) => changes(e, true)} placeholder='titulo' />
        </FormControl>
        <FormControl margin={"2%"}>
            <FormLabel>Contenido</FormLabel>
            <Input onChange={changes} placeholder='contenido' />
        </FormControl>
        <Button isLoading={buttonActive}  onClick={submit} mt={4} colorScheme='teal' type='button' >
            Guardar
        </Button>
    </Box>
  )
}
