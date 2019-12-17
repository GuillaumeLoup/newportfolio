import React, { Component } from 'react';
import open from './assets/open.png';
import close from './assets/close.png';
import opennoir from './assets/new.png';
import closenoir from './assets/closenoir.png';
import './Projects.scss';

class Projects extends Component {
  render() {
    const { backgroundColor } = this.props; 
    return(
      <div className="Projects">
        <div className="title">
          <h3>02.</h3>
          <h1>Présentation des <span>Projets</span> réalisés</h1>
         
          </div>
           <div className={backgroundColor ? "wrapper-project" : "wrapper-project-white" }>
          <div className="img">
          </div>
          <div className="text-explain">
          <img className="open-guillemets" src={!backgroundColor ? open : opennoir} alt="open" />
          <p>  Il m'a a été demandé de développer un site vitrine pour
           un restaurateur expliquant le concept du restaurant et une
            partie administrateur permettant au restaurateur de changer
             le menu du jour ou la carte quand il le souhaite. PS: ajouter /admin
              à l'url pour voir la partie administrateur concernant le menu du jour
               et ajouter /admin2 à l'url pour voir la partie administrateur
                concernant la carte du restaurant.
                 Ce site est consultable via ce lien: </p>
                 <a href="https://vigorous-snyder-06c6f0.netlify.com/" rel="noopener noreferrer" target="_blank"> lien vers le site</a>
                <img className="close-guillemets" src={!backgroundColor ? close : closenoir} alt="close" />
                 </div>
                 </div>
                 <div className={backgroundColor ? "wrapper-project2" : "wrapper-project2-white" }>
          
          <div className="text-explain2">
          <img className="open-guillemets2" src={!backgroundColor ? open: opennoir} alt="open" />
          <p>Il m'a été demandé de refaire le site de la société SQAL
           en respectant une maquette réalisée par l'UX designer de notre
            société. Bien sûr le site est responsive.
             Ce site est consultable via ce lien:</p>
             <a href="https://sqal-website.herokuapp.com/" rel="noopener noreferrer" target="_blank"> lien vers le site</a>
             <img className="close-guillemets2" src={!backgroundColor ? close : closenoir} alt="close" />
                 </div>
                 <div className="img2">
          </div>
                 </div>

                  <div className={backgroundColor ? "wrapper-project" : "wrapper-project-white" }>
          <div className="img3">
          </div>
          <div className="text-explain">
          <img className="open-guillemets" src={!backgroundColor ? open : opennoir} alt="open" />
          <p>Il m'a a été demandé de développer un site permettant
           de choisir un avocat selon ses compétences et de pouvoir
            le contacter via une vidéconférence. Ceci est faisaible
             dans la rubrique "Nos conseillers" il faut clqiuer sur
              "choisissez votre conseiller" et "contacter ce conseiller"
               Ce site est consultable via ce lien: </p>
                 <a href="https://dazzling-kowalevski-e41b9f.netlify.com/" rel="noopener noreferrer" target="_blank"> lien vers le site</a>
                 <img className="close-guillemets" src={!backgroundColor ? close : closenoir} alt="close" />
                 </div>
                 </div>
          <div className={backgroundColor ? "wrapper-project2" : "wrapper-project2-white" }>
          
          <div className="text-explain2">
          <img className="open-guillemets2" src={!backgroundColor ? open : opennoir} alt="open" />
          <p>Les consignes étaient de créer un site sur le thème de pâques
           avec en bonus un easter-egg caché dans celui-ci. J'ai pris le parti
            de concevoir un site internet regroupant des cartes à collectionner
             à retrouver dans les chocolats de nos partenaires (Kinder, Milka, etc...).
              spoiler: cliquez 21 fois sur l'oeuf vert situé en haut de page.
               Ce site est consultable via ce lien:</p>
             <a href="https://dazzling-shannon-cd83bf.netlify.com/" rel="noopener noreferrer" target="_blank"> lien vers le site</a>
                 <img className="close-guillemets2" src={!backgroundColor ? close : closenoir} alt="close" />
                 </div>
                 <div className="img4">
          </div>
                 </div>
        
      </div>
    )
  }
}

export default Projects;