import React from 'react'
import ItemCount from './ItemCount'
import { 
  Card,
  CardBody,
  Image,
  Heading,
  SimpleGrid,
  Text,
  Box,
  Button
} from '@chakra-ui/react';
import { useParams } from "react-router-dom";

const ItemDetail = ({ producto }) => {

  const { id } = useParams();

  const prodFilter = producto.filter((prod) => prod.id == id);

  return (
    <SimpleGrid columns={{xl:1}}>
        {prodFilter.map((prod) => (
          <Box className='item-detail' key={prod.id}>
            <Card
              direction={{ base: 'column', sm: 'row' }}
              overflow='hidden'
              variant='outline'
              className='carta-detail'
              >
              <CardBody className='card-body-detail'>
                  <Image
                      objectFit='cover'
                      boxSize='200px'
                      src={prod.image}
                      alt={prod.name}
                      />
                  <Heading className='h1' size='md'>{prod.name}</Heading>
                  <Text className='description'>
                    {prod.description}
                  </Text>
                  <Text className='stock'>
                    Stock disponible: {prod.stock}
                  </Text>
                  <Text className='price'>
                    ${prod.price}
                  </Text>
                  <ItemCount
                    id={prod.id}
                    image={prod.image}
                    name={prod.name}
                    stock={prod.stock} 
                    price={prod.price}
                   />
              </CardBody>
            </Card>
          </Box>
        ))};
    </SimpleGrid>
  )
}

export default ItemDetail;