import React, { useState, useEffect } from 'react'
import {
    FormControl,
    FormLabel,
    Input,
    FormHelperText,
    Button,
  } from '@chakra-ui/react'
import Swal from 'sweetalert2';
import { useContext } from 'react';
import { CartContext } from '../context/ShoppingCartContext';
import { collection, getFirestore, addDoc } from 'firebase/firestore';

const Formulario = () => {

    const { cart, setCart } = useContext(CartContext);
    const [orderId, setOrderId] = useState()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [apellido, setApellido] = useState("")

    const db = getFirestore()

    const orderCollection = collection(db, "orden")

    const order = {
        name,
        apellido,
        email,
    }
    
    const handleSumbit = (e) => {
        e.preventDefault();
        addDoc(orderCollection, order).then(({id}) => setOrderId(id));
        loader()
    };


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
                text: `Tu codigo de segumiento es: ${orderId}`,
                showConfirmButton: true,
              })
            }
        })
    }

    return (
        <>
            <form onSubmit={handleSumbit} className='form'>
                <div className='inputs-container name-container'>
                    <div className='form-control'>
                        <FormControl  isRequired>
                            <FormLabel>Nombre/s</FormLabel>
                            <Input type="text" placeholder='Nombre' onChange={(e) => setName(e.target.value)}/>
                        </FormControl>
                    </div>
                    <div className='form-control'>
                        <FormControl isRequired>
                            <FormLabel>Apellido/s</FormLabel>
                            <Input type="text" placeholder='Apellido' onChange={(e) => setApellido(e.target.value)} />
                        </FormControl>
                    </div>
                </div>
                <div className='inputs-container email-container'>
                <FormControl isRequired>
                    <FormLabel>Correo electronico</FormLabel>
                        <Input type='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)} />  
                    <FormHelperText>Ingrese su correo electronico</FormHelperText>
                </FormControl>
                </div>
                <div className='inputs-container form-btn'>
                    <Button type='sumbit' id='btn-form'>
                        <span>Enviar Datos</span>
                    </Button>
                </div>
            </form>
        </>
    )
}

export default Formulario;