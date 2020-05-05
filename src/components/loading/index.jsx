import React from 'react';
import Lottie from 'react-lottie';
import myL from '../../assets/loading.json';

export default function PetzLoading() {
  
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: myL,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end',
    width: '100%',
    height: 'calc(100% - 108px)',
    position: 'fixed',
    right: 0
    }}>
      <div style={{
        margin: '0 -25px 0 0'
      }}>
        <Lottie options={defaultOptions} height={200} width={170} />
      </div>
      <h3 style={{
        margin: '0 10px 0 0'
      }}>Carregando...</h3>
  </div>
}
