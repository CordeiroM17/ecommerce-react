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
                title: 'Tu compra fue procesada, te dejamos este codigo para que puedas hacer un seguimiento',
                text: 'codigo fsdgfsdg',
                showConfirmButton: true,
              })
              setCart([])
            }
        })
    }

    return (
        <>
            <form className='form'>
                <div className='inputs-container name-container'>
                    <div className='form-control'>
                        <FormControl  isRequired>
                            <FormLabel>Nombre/s</FormLabel>
                            <Input placeholder='First name' />
                        </FormControl>
                    </div>
                    <div className='form-control'>
                        <FormControl isRequired>
                            <FormLabel>Apellido/s</FormLabel>
                            <Input placeholder='Last name' />
                        </FormControl>
                    </div>
                </div>
                <div className='inputs-container email-container'>
                <FormControl>
                    <FormLabel>Correo electronico</FormLabel>
                        <Input type='email' />  
                    <FormHelperText>Ingrese su correo electronico</FormHelperText>
                </FormControl>
                </div>
                <div className='inputs-container form-btn'>
                    <Button type='sumbit' id='btn-form' onClick={() => loader()}>
                        <span>Enviar Datos</span>
                    </Button>
                </div>
            </form>
        </>
    )
}

export default Formulario;