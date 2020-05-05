import styled from 'styled-components';

export const Wrapper = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0;
  margin: 0;
  list-style: none;
  width: 100%;
  height: 100%;

  li {
    max-width: 22%;
    margin: 2px;
    @media (max-width: 768px) {
      max-width: 50%;
    }

    a {
      text-decoration: none;
      color: inherit;
    }
  }
`

