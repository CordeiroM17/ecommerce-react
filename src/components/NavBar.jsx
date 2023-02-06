import React from 'react';
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
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <Box>
        <Flex className='nav-container'>
            <Box>
                <h1>Samsung</h1>
            </Box>
                
            <Spacer />
            <Box>
                <Menu>
                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                        Smartphone
                    </MenuButton>
                    <MenuList>
                        <MenuItem className='item-text'>Smartphone</MenuItem>
                        <MenuItem className='item-text'>Tablet</MenuItem>
                        <MenuItem className='item-text'>Watches</MenuItem>
                        <MenuItem className='item-text'>Accesorios</MenuItem>
                    </MenuList>
                </Menu>
            </Box>
            <Spacer />
            <Box>
                <CartWidget />
            </Box>
        </Flex>
    </Box>
  )
}

export default NavBar