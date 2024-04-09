import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import navbar from '../../utils/navbar'
import Button  from '../Generics/Button'
import { Container, Link, Logo, Section, Wrapper, Main } from './style'

export const Home = () => {
  const navigate = useNavigate()
  return (
    <Container>
      <Main>
        <Wrapper>
         <Section onClick={() => navigate("/home")} logo> 
            <Logo/> 
            <h3>Houzing</h3> 
            </Section>
          <Section>
            {navbar.map(({path, title, hidden}, index) => {
             return !hidden && (
                <Link 
                  className={({isActive})=> isActive && "active"} 
                  key={index} 
                  to={path}>{title}
                </Link>
               )
             })}
           </Section>
           <Section>
                  {/* bu yerda "onClick" method emas. Props, istalgan nom bersa bo'ladi. ex. on */}
            <Button onClick={() => navigate("/signin")} type={"dark"}>Sign IN</Button>
           </Section>
        </Wrapper>
      </Main>
      <Outlet/>
    </Container>
  )
}

export default Home