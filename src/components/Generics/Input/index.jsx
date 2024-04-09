import React from 'react'
import { Container } from './styled'

const Input = ({ type, 
  onChange, 
  value, 
  defaultValue, 
  placeholder, 
  name,
  width,
  height
}) => {
  return (
    <Container 
      onChange={onChange} 
      type={type} 
      value={value} 
      defaultValue={defaultValue} 
      placeholder={placeholder}
      name={name} 
      width={100}
      height={height}
    />
  )
}

export default Input

