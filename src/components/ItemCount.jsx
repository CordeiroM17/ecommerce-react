import { useState } from 'react';
import { 
    Button,
    useToast,
} from '@chakra-ui/react';
import { useContext } from 'react';
import { CartContext } from '../context/ShoppingCartContext';

const ItemCount = ({ id, image, name, stock, price }) => {

    const toast = useToast()
    const [contador, setContador] = useState(0);

    const sumar = () => {
        contador == stock ? setContador(stock) : setContador(contador + 1);
    };

    const resta = () => {
        contador == 0 ? setContador(0) : setContador(contador - 1);
    };

    const reset = () => {
        if (contador != 0) {
            setContador(0);
            toast({
                title: 'Se restablecio con exito',
                status: 'success',
                duration: 1000,
                isClosable: true,
            })
        }
    };

    const { cart, setCart, totalPrice, setTotalPrice } = useContext(CartContext);

    const addToCart = () => {
        if (contador == 0) {
            toast({
                title: 'La cantidad que usted desea agregar es 0',
                status: 'warning',
                duration: 3000,
                isClosable: true,
            })
        } else {
            setCart((currItems) => {
                const isItemFound = currItems.find((item) => item.id === id);
                if (isItemFound) {
                    return currItems.map((item) => {
                        if (item.id === id) {
                            return { ...item, quantity: item.quantity + contador, image };
                        } else {
                            return item;
                        }
                    });
                } else {
                    return [...currItems, { id, quantity: contador, price, name, image }];
                }
            });
            Swal.fire({
                icon: 'success',
                title: 'El producto se agrego al carrito con exito',
                showConfirmButton: false,
                timer: 1500
              })
        }
    };

    return (
    <>
        <div id='btn-count'>
            <Button id='count-resta' onClick={() => resta()}>
                <span className='material-symbols-outlined'>remove</span>
            </Button>
            <span>{contador}</span>
            <div className='btn-suma-reset-container'>
                <Button id='count-suma' onClick={() => sumar()}>
                    <span className='material-symbols-outlined'>add</span>  
                </Button>
                <Button id='count-reset' onClick={() => reset()}>
                    <span className='material-symbols-outlined'>restart_alt</span>
                </Button>
            </div>
        </div>
        <Button onClick={() => addToCart()} id='btn-add-cart'>Agregar al carrito</Button>
    </>
  )
}
 
export default ItemCount;