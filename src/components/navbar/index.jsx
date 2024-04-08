import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import navbar from '../../utils/navbar'
import { Container, Link, Logo, Section, Wrapper } from './style'

export const Home = () => {
  const navigate = useNavigate()
  return (
    <Container>
      <Wrapper>
        <Section onClick={() => navigate("/home")} logo> 
          <Logo/> 
          <h3>Houzing</h3> 
        </Section>
        <Section>
          {navbar.map(({path, title}, index) => {
            return (
              <Link 
                 className={({isActive})=> isActive && "active"} 
                 key={index} 
                 to={path}>{title}
              </Link>
            )
          })}
        </Section>
        <Section>
          <button>Sign IN</button>
        </Section>
      </Wrapper>
      <Outlet/>
    </Container>
  )
}

export default Home