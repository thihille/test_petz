import styled from 'styled-components';

export const Cards = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0;
  margin: 0;
  list-style: none;
  width: 100%;
`

export const CardList = styled.li`
  display:flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  width: calc(22% - 10px);
  margin: 5px;
  min-height: 50px;
  border-radius: 7px;
  box-shadow: 0 0 5px rgba(0,0,0,.3);
  overflow: hidden;
  
  p {
    font-family: Arial, Helvetica, sans-serif;
    font-size: .8em;
    text-align: center;
    display: block;
    overflow: hidden;
    width: calc(100% - 14px);
    margin: 0 auto;
    padding: 5px 7px;
    background-color: #f0feff;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`