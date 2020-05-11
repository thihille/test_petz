import styled from 'styled-components';

export const PetzHeader = styled.header`
  position: relative;
  display: flex;
  width: 100%;
  background-color: #FFD400;
  justify-content: space-between;
  align-items: center;

  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width:100%;
    height: 6px;
    background-color: #d8b400;
  }

  h1 {
    margin: 0;
    padding: 0;

    img {
      max-width: 150px;
    }
  }

  div.search {
    width: 100%;
    margin-right: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;

    input {
      border: none;
      font-size: 1em;
      padding: 7px 3px 7px 30px;
      margin:0 20px 0 -50px;
      border-radius: 5px;
      border-bottom: 4px solid #d8b400;

      &:focus {
        outline: none;
        border: none;
      }
    }
  }

  a.backPage {
    text-decoration: none;
    color: #fff;

    div.button {
      display: block;
      background-color: #00A0E4;
      padding: 5px 10px 2px 10px;
      border-radius: 5px;
      margin-right: 10px;
      border-bottom: 4px solid #0086bf;
      font-size: .8em;
      cursor: pointer;
  
      &:active {
        border-bottom: none;
        padding: 5px 10px;
      }
    }
  }
`;