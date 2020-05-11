import styled from 'styled-components';

export const ContentWrapper = styled.div`
  display:flex;
  flex-wrap: wrap;
  justify-content: stretch;
  max-width: 1150px;
  margin: 0 auto;

  h2 {
    width: 100%;
    margin: 10px 0;
    padding: 10px;
    font-weight: 100;
    color: #fff;
    background-color: #00A0E4;
    border-radius: 5px;
  }
`
export const ShareRule = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  max-width: 60px;
  height: 250px;
  background-color: #FFD400;
  border-radius: 5px;

  button {
    width: 100%;
    display: block;
    padding: 10px 0;
    font-size: 1.2em;
    color: white;
    border: none;
    background: transparent;
    cursor: pointer;

    &:focus {
      outline: none;
    }

    &:active {
      opacity: .8;
    }

    &:hover {
      img{
        width: 55%;
      }
    }

    img {
      width: 50%;
      transition: width .2s ease-in-out;      
    }
  }
`;
export const ImageDetails = styled.div`
  max-width:43%;
  margin: 0 0 0 10px;

  img {
    width: 100%;
    border-radius: 4px;
  }
`
export const Description = styled.div`
  width: 47%;
  margin: 0 0 0 10px;

  h3 {
    margin: 0;
    padding: 0;
    text-transform: capitalize;
    color: #262626;
    font-weight: 100;
    font-size: 1.5em;
  }

`
export const DescriptionGeneric = styled.div`
  min-width: 400px;
  margin: 0 auto;

  h3 {
    margin: 10px 0 0 0;
    padding: 0;
    color: #00A0E4;
    font-weight: 100;
    font-size: 1.5em;
  }

  p {
    padding: 0;
    margin: 0;
    color: #333333;
  }
`