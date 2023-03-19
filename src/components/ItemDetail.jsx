import { useEffect, useState } from 'react';
import ItemCount from './ItemCount'
import { 
  Card,
  CardBody,
  Image,
  Heading,
  SimpleGrid,
  Text,
  Box,
  Flex
} from '@chakra-ui/react';
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetail = ({ products }) => {

  const { id } = useParams();
  const [prods, setProducts] = useState([]);

  useEffect(() => {
    const db = getFirestore();

    const prodRef = doc(db, "productos", `${id}`);

    getDoc(prodRef).then((snapshot) => {
      if(snapshot.exists()) {
        setProducts(snapshot.data());        
      } else {
        console.log("no se encontro el documento");
      }
    })
  },[])
  
  return (
    <>
      <SimpleGrid columns={{xl:1}}>
        <Box className='item-detail' key={id} maxW='auto'>
          <Card
          direction={{ xl: 'row', lg: 'row', md: 'column', sm: 'column' }}
          overflow='hidden'
          variant='outline'
          className='carta-detail'
          w={{xl:'auto', lg:'auto', md:'320px', sm:'320px'}}
          h='auto'
          
          >
          <Image
          objectFit='cover'
          h='320px'
          w='320px'
          src={prods.image}
          alt={prods.name}
          p={10}
          />
            <CardBody w='100%'  className='card-body-detail'>
                
              <Flex h='100%' flexDirection='column' justify='space-between'>
                <Heading display='flex' textAlign='center ' alignItems='center' gap={4} lineHeight='tall' size='md'>
                  <Box px='2' py='1' rounded='full' bg='green.200'>
                    {prods.name}
                  </Box>
                  <Text className='price'>
                    ${prods.price}
                  </Text>
                </Heading>
              
                
                <Box textAlign={{xl:'justify', lg:'justify', md:'center', sm:'center'}}>
                  <Text p={4} className='description'>
                    {prods.description}
                  </Text>
                  <Text p={4} className='stock'>
                    Stock disponible: {prods.stock}
                  </Text>
                </Box>
                
                <ItemCount
                  id={`${id}`}
                  image={prods.image}
                  name={prods.name}
                  stock={prods.stock} 
                  price={prods.price}
                />
              </Flex>
            </CardBody>
          </Card>
        </Box>
      </SimpleGrid>
    </>
  )
}

export default ItemDetail;