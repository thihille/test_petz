import React from 'react';
import Link from 'next/Link';

import {Item, CardImage, CardTitle, CardDescription } from './style';

const Card = ({data}) => {
  const { id, image, title, body} = data
  return (
    <>
      <Link href={`detalhes/[id]`} as={`/detalhes/${id}`}>
        <Item>
          <CardImage>
            <img src={image} />
          </CardImage>
          <CardTitle>
            {title}
          </CardTitle>
          <CardDescription>
            {body}
          </CardDescription>
        </Item>
      </Link>
    </>
  )
}
export default Card;