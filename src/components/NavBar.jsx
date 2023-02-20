import { ChevronDownIcon } from '@chakra-ui/icons';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    Flex,
    Spacer,
    Box,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <Box className='navbar'>
        <Flex className='nav-container'>
            <Box className='nav-box logo'>
                <Link to='/'>Samsung</Link>
            </Box>
            <Spacer />
            <Box className='nav-box nav-menu'>
                <Menu>
                    <MenuButton className='menu-btn' as={Button} rightIcon={<ChevronDownIcon />}>
                        Categorias
                    </MenuButton>
                    <MenuList>
                        <Link to={`/catalogo`}>
                            <MenuItem className='item-text'>Todo</MenuItem>
                        </Link>
                        <Link to={`/category/${"smartphone"}`}>
                            <MenuItem className='item-text'>Smartphone</MenuItem>
                        </Link>
                        <Link to={`/category/${"tablet"}`}>
                            <MenuItem className='item-text'>Tablet</MenuItem>
                        </Link>
                        <Link to={`/category/${"watches"}`}>
                            <MenuItem className='item-text'>Watches</MenuItem>
                        </Link>
                        <Link to={`/category/${"accesorios"}`}>
                            <MenuItem className='item-text'>Accesorios</MenuItem>
                        </Link>
                    </MenuList>
                </Menu>
            </Box>
            <Spacer />
            <Box className='nav-box'>
                <Link to='/cart'>
                    <CartWidget />
                </Link>
            </Box>
        </Flex>
    </Box>
  )
};

export default NavBar;