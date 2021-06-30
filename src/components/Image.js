import React, {Component} from 'react';
import AFLogo from '../images/AFLogo.png';

export default class Image extends Component {
  render() {
    return (
      <div>
        <img className="round" width="25%" src={AFLogo} alt="Alpine Flyers Logo" />
      </div>
    )
  }
}