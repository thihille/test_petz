import React from 'react';
import Lottie from 'react-lottie';
import dogLoading from '../../assets/dog-loading.json';

export default function PetzLoading() {
  
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: dogLoading,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    position: 'fixed',
    top:0,
    right:0,
    bottom:0,
    left:0
    }}>
      <div>
        <Lottie options={defaultOptions} width="200" height="200" />
      </div>
      <h3 style={{
        margin: '-30px 0 0 0',
        padding: '0',
        color: '#999'
      }}>Carregando...</h3>
  </div>
}
