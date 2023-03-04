import React, { useState, useEffect } from 'react'
import {
    FormControl,
    FormLabel,
    Input,
    FormErrorMessage,
    FormHelperText,
    Button,
    Container,
  } from '@chakra-ui/react'
import Swal from 'sweetalert2';
import { useContext } from 'react';
import { CartContext } from '../context/ShoppingCartContext';

const Formulario = () => {

    const { cart, setCart } = useContext(CartContext);

    const [input, setInput] = useState('');

    const handleInputChange = (e) => setInput(e.target.value);

    const isError = input === '';

    const loader = () => {
        Swal.fire({
            icon: 'warning',
            title: '¿Estas seguro de finalizar tu compra?',
            text: 'Si aceptas no habra vuelta atras',
            showConfirmButton: true,
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Confirmar'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                icon: 'success',
                title: 'Estamos procesando tu compra',
                text: 'Esto puede llevar unos segundos',
                timer: '5000',
                showConfirmButton: false,
                timerProgressBar: true
              })
              setCart([])
            }
        })
    }

    return (
        <Container maxW='80%' className='form-container'>
            <form className='form'>
                <div className='inputs-container name-container'>
                    <div className='form-control'>
                        <FormControl  isRequired>
                            <FormLabel>First name</FormLabel>
                            <Input placeholder='First name' />
                        </FormControl>
                    </div>
                    <div className='form-control'>
                        <FormControl isRequired>
                            <FormLabel>Last name</FormLabel>
                            <Input placeholder='Last name' />
                        </FormControl>
                    </div>
                </div>
                <div className='inputs-container email-container'>
                    <FormControl isInvalid={isError} isRequired>
                        <FormLabel>Email</FormLabel>
                        <Input type='email' value={input} onChange={handleInputChange} />
                        {!isError ? (
                            <FormHelperText>
                            Enter the email you'd like to receive the newsletter on.
                            </FormHelperText>
                        ) : (
                            <FormErrorMessage>Email is required.</FormErrorMessage>
                        )}
                    </FormControl>
                </div>
                <div className='inputs-container form-btn'>
                    <Button type='sumbit' id='btn-form' onClick={() => loader()}>
                        <span>Enviar Datos</span>
                    </Button>
                </div>
            </form>
        </Container>
    )
}

export default Formulario;