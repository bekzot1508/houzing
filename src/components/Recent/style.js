import styled from 'styled-components';
import { ReactComponent as arrow } from '../../assets/icons/arrow.svg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: auto;
  height: 96px 130px;
  width: 100%;
  max-width: 1440px;
  margin-top: 96px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 32px;
`;
 
export { Container, Content};