import React, { useState } from 'react'
import {
    FormControl,
    FormLabel,
    Input,
    FormErrorMessage,
    FormHelperText,
    Button,
    Container
  } from '@chakra-ui/react'

const Formulario = () => {

    const [input, setInput] = useState('');

    const handleInputChange = (e) => setInput(e.target.value);

    const isError = input === '';

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
                    <Button id='btn-form'>
                        <span>Enviar Datos</span>
                    </Button>
                </div>
            </form>
        </Container>
    )
}

export default Formulario;