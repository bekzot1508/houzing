import React from 'react'
import { Input, Button } from '../Generics'
import { Container } from './style'

const Home = () => {
  return (
    <Container>
      <h1>Home</h1>
      <Input placeholder={"Test"}/>
      <Button/>
    </Container>
  )
}

export default Home