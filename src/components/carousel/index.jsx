import React, { Component } from 'react';
import Carousel from 'react-responsive-carousel'; 

// import { Container } from './styles';

export default class carousel extends Component {
  render() {
    return (
    <Carousel>
      <div>
        <img src="assets/1.jpeg" />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src="assets/2.jpeg" />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src="assets/3.jpeg" />
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
    );
  }
}
