import React from 'react';
import { Blur, Container, Content, Img } from './style';
import { Carousel } from 'antd';
import {Button} from '../Generics'

import img1 from '../../assets/img/house1.png';
 

export const Banner = () => {
  
  return (
    <Container>
      <Carousel >
        <Img src={img1} />
      </Carousel>
      <Blur />
      <Content>
        <Content.Title>
          Vermont Farmhouse With Antique Jail Is the Week's Most Popular Home
        </Content.Title>
        <Button>Read More</Button>
      </Content>
    </Container>
  );
};

export default Banner;