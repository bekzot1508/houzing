import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
import {ReactComponent as logoIMg} from '../../assets/icons/logo.svg'

const Container = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;`;

const Main = styled.div`
   display: flex;
   justify-content: center;
   background: var(--colorPrimary);
   `;

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* background: var(--colorPrimary); */
    color: #fff;
    padding: var(--padding);
    height: 64px;
    font-size: 16px;
    width: 100%;
    max-width: 1440px;
`;

const Section = styled.div`
display: flex;
align-items: center;
cursor: ${({logo}) => logo && "pointer"};

.active{
    color: #b8ff06;
}`;

const Logo = styled(logoIMg)`
width: 30px;
margin-right: 12px;
& path {
    fill: #ffff;
}`

const Link = styled(NavLink)`
text-decoration: none;
color: #ffff;
padding: 0 32px;`;
export{Container, Wrapper, Section, Logo, Link, Main}