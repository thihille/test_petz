import styled from 'styled-components';

export const Card = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 5px;
  min-height: 50px;
  border-radius: 7px;
  box-shadow: 0 0 5px rgba(0,0,0,.3);
  overflow: hidden;
  width: 100%;

  img {
    display: block;
    width: 100%;
    height: auto;
  }

  p {
    font-size: .8em;
    font-weight: 100;
    text-align: center;
    display: block;
    overflow: hidden;
    width: calc(100% - 24px);
    margin: 0 auto;
    padding: 5px 7px;
    white-space: nowrap;
    text-overflow: ellipsis;

    @media (max-width: 768px) {
      max-width: 150px;
    }
  }
`;
