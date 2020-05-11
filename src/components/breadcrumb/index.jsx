import React from 'react';
import styled from 'styled-components';

const BreadWrapper = styled.ul`
  width:100%;
  background-color: #eeeeee;
  list-style: none;
  margin: 0;
  padding: 0;
`;
const Breadlist = styled.li`
  display:inline;
  margin: 0 0 0 20px;

  span{
    margin-left:20px;
  }
`

const Breadcrumb = ({
  items = null
}) => {

  return (
    <BreadWrapper>
      {items && items.map((item,i) => (
        <Breadlist>{item} {items.length !== (i+1) ? (
        <span>/</span>
        ) : ''}</Breadlist>
      ))}
    </BreadWrapper>
  )
}

export default Breadcrumb;