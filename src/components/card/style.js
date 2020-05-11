import styled from 'styled-components';

export const Item = styled.a`
  text-transform: none;
  display:block;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  margin: 0;
  min-height: 50px;
  border-radius: 7px;
  box-shadow: 0 0 5px rgba(0,0,0,.3);
  overflow: hidden;
  width: 100%;
  max-width: 200px;
  cursor: pointer;
  transition: transform .2s ease-in-out, background-color .4s ease;
  transform-origin: top right;

  &:hover {
    background-color: #FFD400;
    transform: rotate(2deg);
  }

  @media (max-width: 768px) {
    max-width: 250px;
  }
`;
export const CardTitle = styled.div`
  font-size: 1em;
  font-weight: 700;
  text-align: center;
  display: block;
  overflow: hidden;
  width: calc(100% - 30px);
  margin: 0 auto;
  padding: 5px 7px;
  white-space: nowrap;
  text-overflow: ellipsis;
  border-bottom: 1px solid rgba(0,0,0,.1);
`;
export const CardDescription = styled.div`
  font-size: .8em;
  font-weight: 100;
  text-align: center;
  display: block;
  overflow: hidden;
  width: calc(100% - 24px);
  margin: 0 auto;
  padding: 10px 7px 10px 7px;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
export const CardImage = styled.div`
  display:block;
  

  img {
    display: block;
    width: 100%;
    height: auto;
  }
`;
