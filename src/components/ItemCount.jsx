import { useState } from 'react';
import { 
    Button,
    useToast,
} from '@chakra-ui/react';

const ItemCount = ({ stock }) => {

    const toast = useToast()
    const [contador, setContador] = useState(1);

    const sumar = () => {
        contador == stock ? setContador(stock) : setContador(contador + 1);
    };

    const resta = () => {
        contador == 1 ? setContador(1) : setContador(contador - 1);
    };

    const reset = () => {
        if (contador != 1) {
            setContador(1);
            toast({
                title: 'Se restablecio con exito',
                status: 'success',
                duration: 1000,
                isClosable: true,
            })
        }
    };

    return (
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
  )
}
 
export default ItemCount;