import React from 'react'
import { Card, CardHeader, CardBody, Heading, Text, CardFooter } from '@chakra-ui/react';
import { Link } from "react-router-dom";

export default function Cards({ id, body, title, fecha }) {
  return (
    <Link to={`/posts/${id}`}>
        <Card border={'solid'} h={"30vh"} >
            <CardHeader overflow={'auto'} h={'20%'}>
                <Heading  size='md'>{title}</Heading>
            </CardHeader>
            <CardBody h={'80%'} overflow={'scroll'}>
                <Text fontSize='sm'>
                    {body}
                </Text>
            </CardBody>
            <CardFooter overflow={'hidden'} h={'2%'}>
                <Text fontSize={'x-small'}>
                    {fecha}
                </Text>
            </CardFooter>
        </Card>
    </Link>
  )
}
