import { Button } from '@chakra-ui/react';
import { useContext } from 'react';
import { CartContext } from '../context/ShoppingCartContext';

const CartWidget = () => {

  const { cart, setCart } = useContext(CartContext);

  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  return (
    <Button id='btn-cart'>
      <span>{quantity}</span>
      <span className='material-symbols-outlined'>shopping_cart</span>
    </Button>
  )
};

export default CartWidget;