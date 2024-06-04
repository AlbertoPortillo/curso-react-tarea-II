import React, {useEffect} from 'react'
import { useOutletContext } from 'react-router-dom';
import { Box, SimpleGrid } from '@chakra-ui/react';

import Cards from './Components/Cards';

const exampleList = [ 
  { titulo: "blog rapido", body: "Este es el cuerpo del blog rapido", date: Date('2023-12-21')}, 
  { titulo: "blog lento", body: "Este es el cuerpo del blog lento", date: Date('2023-12-21')},  
  { titulo: "blog largo", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut tortor quis justo blandit convallis. Vivamus fermentum dolor elit, nec efficitur lorem semper eget. Vestibulum tristique ipsum ut malesuada ultricies. Vivamus eleifend mi eget mi efficitur pellentesque. Nam vel odio magna. Etiam mollis mauris risus, id venenatis felis fringilla nec. Vivamus lacinia, est nec laoreet suscipit, risus odio ullamcorper urna, at lacinia ante lectus id massa. Vivamus consectetur, erat quis molestie sit. ", date: Date('2023-12-21')}, 
]

export default function Home() {
  const [list, handleChange] = useOutletContext(); // <-- access context value

  useEffect(() => {
    handleChange(exampleList)
  }, [])
  
  return (
    <Box bg='white' width={'100%'} height={'90%'}>
      <SimpleGrid overflow={'scroll'} h={'100%'} paddingX={'2%'} paddingY={'1%'} spacing={8} templateColumns='repeat(4, 20%)'>        {
          list?.map((item, key) => <Cards key={`blog-card-${key}`} id={key} body={item?.body} title={item?.titulo || "sin titulo"} fecha={item?.date} />)
        }
      </SimpleGrid>
    </Box>
  )
}
