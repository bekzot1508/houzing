import React from 'react'
import { Container, Icon, Wrapper } from './styled'
import { forwardRef } from 'react'

const Input =  forwardRef( // ForwardRef 2 ta parametr qabul qiladi: birinchisi - props, ikkinchisi - ref
  (
    {
      type,
      onChange,
      value,
      defalutValue,
      placeholder,
      name,
      width,
      height,
      icon,
    },
    ref
  ) => {
    return (
      <Wrapper>
        <Icon>{icon}</Icon>
        <Container
          ref={ref}
          icon={icon}
          placeholder={placeholder}
          name={name}
          value={value}
          defaultValue={defalutValue}
          onChange={onChange}
          type={type}
          width={width}
          height={height}
        />
      </Wrapper>
    );
  }
);


export default Input

