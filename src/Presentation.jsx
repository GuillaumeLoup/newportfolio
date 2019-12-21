import React, { Component } from 'react';
import './Presentation.scss';
import js from './assets/js.png';
import react from './assets/react.png';
import node from './assets/node.png';
import redux from './assets/redux.png';
import html from './assets/html.png';
import css from './assets/css.png';
import bootstrap from './assets/bootstrap.png';
import mysql from './assets/mysql.png';

class Presentation extends Component {
  render() {
    return(
      <div className="Presentation" id="presentation">
      <div className="title">
      <h3>01.</h3>
      <h1>Pésentation des <span>outils</span> et <span>langages</span> utilisés</h1>
      </div>
      <div className="container-para">
      <div className="wrapper-logos">
      <div className="logos1">
      <img src={js} alt="js" />
      <img src={react} alt="react" />
      <img src={node} alt="node" />
      <img src={redux} alt="redux" />
      </div>
      <div className="logos2">
      <img src={html} alt="html" />
      <img src={css} alt="css" />
      <img src={mysql} alt="mysql" />
      <img src={bootstrap} alt="bootstrap" />
      </div>
      </div>
      <div className="wrapper-text">
      <p>Ayant une forte appétence pour l'informatique c'est tout naturellement
       que j'ai décidé de me former sur le langage Javascript et notamment le
        framework React, coté back-end j'utilise Node. Je suis passionné par mon
         travail et curieux d'en apprendre un peu plus chaque jour.</p>
      </div>
      </div>
      </div>
    )
  }
}

export default Presentation;