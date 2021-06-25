import React, {Component} from 'react';
import AFLogo from '../images/AFLogo.png';

export default class Image extends Component {
  render() {
    return (
      <div>
        <img width="30%" src={AFLogo} alt="Alpine Flyers Logo" />
      </div>
    )
  }
}