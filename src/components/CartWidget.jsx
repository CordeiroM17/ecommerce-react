import { Button } from '@chakra-ui/react';

const CartWidget = () => {
  return (
    <Button id='btn-cart'>
      <span>10</span>
      <span className='material-symbols-outlined'>shopping_cart</span>
    </Button>
  )
};

export default CartWidget;