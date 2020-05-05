import React from 'react';
import logoPetz from '../../assets/logo.webp';
import { PetzHeader } from './style';
import Lottie from 'react-lottie';
import dog from '../../assets/dog.json';

export default () => {
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: dog,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  return(
    <PetzHeader>
      <div>
        <h1 alt="Petz - Seu pet center de estimação">
          <img src={logoPetz} alt=""/>
        </h1>
      </div>
      <div>
        <Lottie options={defaultOptions} height={100} width={100} />
      </div>
    </PetzHeader>
  )
}
