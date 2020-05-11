import React from 'react';
import Link from 'next/Link';

import { PetzHeader } from './style';
import logoPetz from '../../assets/logo.webp';
import Lottie from 'react-lottie';
import dog from '../../assets/dog.json';

export default ({
  disableSearch,
  filterInput,
  setFilterInput
}) => {
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: dog,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const handleSearch = e => {
    
    setFilterInput(e.target.value)
  }

  return(
    <PetzHeader>
      <div>
        <h1 alt="Petz - Seu pet center de estimação">
          <img src={logoPetz} alt=""/>
        </h1>
      </div>
      <div>
        {!disableSearch ? (
          <div className="search">
            <Lottie options={defaultOptions} height={100} width={100} />
            <input type="text" placeholder="Pesquisar" value={filterInput} onChange={(e) => handleSearch(e)}  />
          </div>
        ) : (
          <Link href="/">
            <a className="backPage" title="clique para voltar" href="/">
              <div className="button">Clique para voltar</div>
            </a>
          </Link>
        )}
      </div>
    </PetzHeader>
  )
}
