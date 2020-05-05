import React, { useState, useEffect } from 'react';
import Link from 'next/Link';
import { getPosts } from "../../services/api";
import PetzLoading from '../../components/loading';

import { Wrapper } from './style';

import CardItem from '../card';

export default function List() {
  const [list, setList] = useState([]);

  if(list.length === 0){
    getPosts('/posts').then(data => {
      setList(data.items);
    });
  }

  return (
    <>
    {list.length ? (
      <Wrapper>
        {list.map(lst => (
          <li>
            <Link href={`/details?idpost=${lst.id}`} as={`/detalhes/${lst.id}`}>
              <a title="Clique para ver os detalhes">
                <CardItem title={lst.title} id={lst.id} key={lst.id} />
              </a>
            </Link>
          </li>
        ))}
      </Wrapper>
    ):(
      <PetzLoading />
    )}
    </>
  )
}
