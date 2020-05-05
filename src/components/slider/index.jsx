import React from 'react';
import {Banner} from './style';
import banner1 from '../../assets/banner1.jpg';

import Lottie from 'react-lottie';
import dogBanner from '../../assets/dog-banner.json';

export default () => {

  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: dogBanner,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <Banner>
      <div className="anin">
        <Lottie options={defaultOptions} height={300} width={270} />
      </div>
      <img src={banner1} />
    </Banner>
  );
}

