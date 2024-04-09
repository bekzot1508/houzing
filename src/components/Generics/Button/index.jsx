import React from 'react'
import { Container } from './styled'

const Button = ({
  children, 
  type, 
  onClick, 
  width, 
  height, 
  fontSize
}) => {
  return (
    <Container 
      onClick={onClick}  
      type={type} 
      width={width} 
      height={height} 
      fontSize={fontSize}
    >
        {children || "Generic Button"}
    </Container>
  )
}

export default Button

