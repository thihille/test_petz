import React from 'react';
import {Card } from './style';
// import { Container } from './styles';

export default function CardItem(props) {
  const [didLoad, setLoad] = React.useState(false);
  const style = didLoad ? {} : {visibility: 'hidden'};

  return (
    <Card>
      <img style={style} src={`https://loremflickr.com/200/100/pet?random=${props.id}`} onLoad={() => setLoad(true)} />
      <p>{props.title}</p>
    </Card>
  );
}
