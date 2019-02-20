import React, { Component } from 'react'
import profilePicture from './deona1.jpg'
import './Projects.css'

class Card extends Component {
  render() {
    return (
      <article className="card">
            <div className="img-container">
                {/* <img src={this.props.cardData.img} alt={this.props.cardData.alt} /> */}
                <img src={this.props.cardData.img} alt={this.props.cardData.alt}></img> 
            </div>
            <h2 className="title">{this.props.cardData.name}</h2>
            <div className="card-info-container">
                <p className="card-content">{this.props.cardData.description}</p>
            </div>
      </article>
    );
  }
}

export default Card;
