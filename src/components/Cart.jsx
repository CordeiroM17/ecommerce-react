import { 
  Container,
  CloseButton,
  VStack,
  StackDivider,
  Image,
  useToast
} from '@chakra-ui/react';
import React, { useContext, useState } from 'react';
import { CartContext } from '../context/ShoppingCartContext';
import Formulario from './Formulario';

const Cart = () => {
  const toast = useToast();
  const {cart, setCart,} = useContext(CartContext)

  const deleteItemCart = (id) => {
    const isInCart = cart.filter((item) => item.id !== id);
    if (isInCart) {
      setCart(isInCart);
      toast({
        title: 'Producto eliminado del carrito',
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
    }
  }

  return (
    <>
      <Container className='cart-container' maxW='auto' p={[0, 20]}>
        <VStack
          divider={<StackDivider borderColor='gray.200' />}
          spacing={4}
          align='stretch'
          >
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Nombre</th>
                <th>Cantidad</th>
                <th>Precio</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => {
                return (
                  <tr key={item.id}>
                    <th>
                      <Image
                        boxSize='100px'
                        objectFit='cover'
                        src={item.image}
                        alt={item.name}
                      />
                    </th>
                    <th>{item.name}</th>
                    <th>{item.quantity}</th>
                    <th>${item.price}</th>
                    <th>
                      <CloseButton size='lg' background='red' onClick={() => deleteItemCart(item.id)}/>
                    </th>
                  </tr>
                );
              })}
              <tr>
                <th></th>
                <th></th>
                <th>Precio total:</th>
                <th>100</th>
                <th></th>
              </tr>
            </tbody>
          </table>
          
        </VStack>
        <Formulario/>
      </Container>
    </>

  )
}

{/* <Box p=' 0 50px' h='150px' bg='yellow.200' display="flex" alignItems='center' justifyContent="space-between">
            <Image
              boxSize='150'
              objectFit='cover'
              src='https://bit.ly/dan-abramov'
              alt='Dan Abramov'
            />
            <Text fontSize='xl'> Nombre Producto </Text>
            <Text fontSize='xl'> 1 </Text>
            <Text fontSize='xl'> $10000 </Text>
          </Box> */}

export default Cart;