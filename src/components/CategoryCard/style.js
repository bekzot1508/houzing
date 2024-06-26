import styled from 'styled-components';
import { ReactComponent as bed } from '../../assets/icons/bed.svg';
import { ReactComponent as bath } from '../../assets/icons/bath.svg';
import { ReactComponent as garage } from '../../assets/icons/car.svg';
import { ReactComponent as ruler } from '../../assets/icons/ruler.svg';
import { ReactComponent as love } from '../../assets/icons/love.svg';
import { ReactComponent as resize } from '../../assets/icons/resize.svg';

const Container = styled.div`
 border-radius: 3px;
  width: 100%;
  max-width: 280px;
  min-width: 230px;
  max-height: 380px;
  min-height: 350px;

  filter: drop-shadow(0px 20px 38px rgba(0, 0, 0, 0.06))
    drop-shadow(0px 7px 46px rgba(0, 0, 0, 0.06))
    drop-shadow(0px 8px 15px rgba(0, 0, 0, 0.06));

  /* margin: 100px; */
`;

const Img = styled.img`
  border-radius: 3px;
  width: 100%;
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
  //styleName: Paragraph/Large/Semibold;
   font-family: Montserrat;
   font-size: 18px;
   font-weight: 600;
   line-height: 28px;
   text-align: left;

`;
 
const Icons = styled.div``;

const Blur = styled.div`
position: absolute;
top: 0;
bottom: 0;
right: 0;
left: 0;
background: rgba(0, 0, 0, 0.7);
border-radius: 3px;
`;

 

export { Container, Img, Content, Icons, Blur};