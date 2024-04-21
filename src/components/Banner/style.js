import styled from 'styled-components';
import { ReactComponent as arrow } from '../../assets/icons/arrow.svg';

const Container = styled.div`
  position: relative;
  height: fit-content;
  margin-top: 96px;
`;
 
const Img = styled.img`
  width: 100%;
`;

const Blur = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
`;

const Content = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  color: white;
  justify-content: center;
  align-items: center;
`;

Content.Title = styled.h1`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 36px;
  text-align: center;
  letter-spacing: -0.02em;

  color: #ffffff;
  max-width: 555px;
  width: 100%;
`;
 
export { Container, Img, Blur, Content };