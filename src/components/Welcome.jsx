import React from 'react'
import { Link } from 'react-router-dom'
import {
  Image,
  Button
} from '@chakra-ui/react';

const Welcome = () => {
  return (
    <div className='welcome-container'>
      <Image className='welcome-logo' src='/logo.png'/>
      <Link to={`/catalogo`}>
        <Button id='btn-home'>Ir a catalogo</Button>
      </Link>
    </div>
  )
}

export default Welcome;