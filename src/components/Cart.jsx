import { 
  Container,
  CloseButton,
  VStack,
  StackDivider,
  Image,
  useToast,
  Button,
  Text,
  SimpleGrid,
  Stack,
  Box,
  Flex,
  Divider
} from '@chakra-ui/react';
import { CartContext } from '../context/ShoppingCartContext';
import { useContext } from 'react';
import Formulario from './Formulario';
import { Link } from 'react-router-dom';


const Cart = () => {

  const toast = useToast();
  const {cart, setCart} = useContext(CartContext)

  const totalPrice = () => {
    return cart.reduce((acc, act) => acc + act.quantity * act.price, 0);
  }

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

  if(cart.length === 0) {
    return (
      <>
        <Container className='cart-container' maxW='auto' p={[0, 20]}>
          <Flex align='center' justify='center' direction='column'>
            <Text  p='50' color='white'>No hay productos agregados al carrito</Text>
            <Link to={`/catalogo`}>
              <Button>Volver a comprar</Button>
            </Link>
          </Flex>
        </Container>
      </>
    )
      
  }

  return (
    <>
      <Container className='cart-container' maxW='auto' p='20px'>
        <SimpleGrid columns={{xl:2, lg:2, md:1, sm:1}}>
          <Container maxW='auto' mb={{md:'50px'}}>
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
                      <tr className='datos-cart' key={item.id}>
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
                    <tr className='total-cart'>
                      <th></th>
                      <th></th>
                      <th>Total:</th>
                      <th>${totalPrice()}</th>
                      <th></th>
                    </tr>
                </tbody>
              </table>
            </VStack>
          </Container>
          <Container background='#252525' maxW='auto' borderRadius='var(--chakra-radii-md)'>
            <Formulario/>
          </Container>
        </SimpleGrid>
      </Container>
    </>

  )
}

export default Cart;