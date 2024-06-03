import React from 'react'
import { Box, Card, CardHeader, CardBody, Heading, Stack, StackDivider, Text } from '@chakra-ui/react';

export default function Cards({ id, body, title }) {
  return (
    <Card>
        <CardHeader>
            <Heading size='md'>Blog #{id + 1}</Heading>
        </CardHeader>

        <CardBody>
            <Stack divider={<StackDivider />} spacing='4'>
            <Box>
                <Heading size='xs' textTransform='uppercase'>
                    {title}
                </Heading>
                <Text pt='2' fontSize='sm'>
                    {body}
                </Text>
            </Box>
            </Stack>
        </CardBody>
    </Card>
  )
}
