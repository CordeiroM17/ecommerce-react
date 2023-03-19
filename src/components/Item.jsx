import { 
    Card, 
    CardBody, 
    Stack,
    Image,
    Heading,
    Button,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Item = ({ id, image, name}) => {
  return (
    <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
        className='carta'
        >
        <Stack className='card-body-container'>
            <CardBody>
                <Image
                    objectFit='cover'
                    boxSize='200px'
                    src={image}
                    alt={name}
                    />
                <Heading className='h1' size='md'>{name}</Heading>
                <Link to={`/item/${id}`}>
                    <Button id='ver-mas-btn'>
                        Ver más
                    </Button>
                </Link>
            </CardBody>
        </Stack>
    </Card>
  )
};

export default Item;