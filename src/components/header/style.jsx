import styled from 'styled-components';

export const PetzHeader = styled.header`
  position: relative;
  display: flex;
  width: 100vw;
  background-color: #fbcf3b;
  justify-content: space-between;

  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width:100vw;
    height: 6px;
    background-color: #deb42a;
  }

  h1 {
    margin: 0;
    padding: 0;

    img {
      max-width: 150px;
    }
  }
`;