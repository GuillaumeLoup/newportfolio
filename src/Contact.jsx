import React, { Component } from 'react';
import './Contact.scss';

class Contact extends Component {
  render() {
    return(
      <div className="Contact">
        <div className="title">
          <h3>03.</h3>
          <h1>Contactez-moi</h1>
        </div>
        <div className="logos">
        <div className="mail">
      <h3>Mail: guillaume.loup@live.fr</h3>
      </div>
      <div className="phone">
        <h3>Phone: 06.72.19.62.70</h3>
      </div>
      </div>
      </div>
    )
  }
}

export default Contact;