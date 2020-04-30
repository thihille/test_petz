import React from 'react';

import logoPetz from '../../assets/logo.webp';

import { PetzHeader } from './style';

export default class HeaderComponent extends React.Component {
  render(){
    return(
      <PetzHeader>
        <div>
          <h1 alt="Petz - Seu pet center de estimação">
            <img src={logoPetz} alt=""/>
          </h1>
        </div>
        <div className="menu">
          item
        </div>
      </PetzHeader>
    )
  }
}