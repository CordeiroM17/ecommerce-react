import React from 'react';
import Item from './Item';
import { 
  Box,
  SimpleGrid
} from '@chakra-ui/react';

const ItemList = ({ producto }) => {
  return (
    <SimpleGrid columns={{xl:4, lg:3, md:2 ,sm:1}} spacing={10}>
        {producto.map((prod) => (
          <Box className='item-list'>
            <Item
              id={prod.id}
              image={prod.image}
              name={prod.name}
              description={prod.description}
              price={prod.price}
              stock={prod.stock}
              category={prod.category}
            />
          </Box>
        ))};
    </SimpleGrid>
  );
};

export default ItemList;