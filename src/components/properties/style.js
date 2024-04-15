import styled from 'styled-components';

const Container = styled.div`
  /* display: flex;
  flex-wrap: wrap;
  padding: var(--padding);                                      
  gap: 20px;
  justify-content: space-between; */

  padding: var(--padding);
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  grid-gap: 20px;
  width: 100%;
  max-width: 1440px;
  margin: auto;
`;

export { Container };