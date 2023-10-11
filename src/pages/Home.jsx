import ButtonComponent from "../components/Button.jsx";
import { useEffect } from "react";
import Typed from "typed.js";

import Beard from "../assets/img/portfolio-beard.png";
import PortfolioIMG from "../assets/img/portfolio-picture.png";
import FrontEndIMG from "../assets/img/front-end.png";
import BackEndIMG from "../assets/img/back-end.png";
import ToolsIMG from "../assets/img/tools.png";
import WTM from "../assets/img/whats-the-movie.png";
import CotizUpImg from "../assets/img/cotizup.png";
import EurAfrique from "../assets/img/eurafrique.png";
import ConjugEasy from "../assets/img/ConjugEasy.png";
import React from "react";

export default function Home() {
  const el = React.useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Web Developer",
        "Front-end Developer",
        "Back-end Developer",
        "French guy",
        "Football player",
        "Mugiwara",
        "Jiu-jitsu-ka",
      ],
      loop: true,
      typeSpeed: 50,
      backDelay: 1000,
      showCursor: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="home-container">
      <div className="home-container-main typed-output">
        <h1 ref={el}></h1>
        <p>BELKACEM Oussama</p>
        <img src={Beard} id="img" />
      </div>
      <div className="ribambelle">
        <img src={PortfolioIMG} />
      </div>
      <div className="home-container-presentation">
        <div className="home-container-presentation-container">
          <h2>Hey, Salut, Salam !</h2>
          <h3>Moi c'est Oussama, enchanté !</h3>
          <p>
            Depuis le début de mon parcours en tant que dévelopeur, j'ai
            effectué des prestations à distance pour des sociétés commerciales,
            consulté pour des clients dans l'enseignement et collaboré avec des
            personnes talentueuses pour créer des produits numériques à la fois
            pour un usage professionnel et grand public. Je suis naturellement
            curieux et je travaille constamment sur l'amélioration de mes
            compétences.
          </p>
        </div>
      </div>
      <div className="home-container-stack">
        <div className="home-container-stack-container">
          <div className="item">
            <div className="item-container">
              <img src={FrontEndIMG} />
              <h1>Front-End Developer</h1>
              <p>UX/UI</p>
              <h1>Langages</h1>
              <ul>
                <li>HTML/CSS/SCSS</li>
                <li>JavaScript</li>
                <li>React.js</li>
              </ul>
            </div>
          </div>
          <div className="item">
            <div className="item-container">
              <img src={BackEndIMG} />
              <h1>Back-End Developer</h1>
              <p>Données et sécurité.</p>
              <ul>
                <h1>Langages</h1>
                <li>PHP</li>
                <li>Symfony/Laravel</li>
                <li>Node.js</li>
              </ul>
            </div>
          </div>
          <div className="item">
            <div className="item-container">
              <img src={ToolsIMG} />
              <h1>Dev Tools</h1>
              <p>Ma trousse à outils.</p>
              <ul>
                <h1>Outils</h1>
                <li>Docker</li>
                <li>Git/GitHub</li>
                <li>Bootstrap</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="home-container-projects">
        <h1>Projets réalisés</h1>
        <p>Quelques projets auxquels j'ai pu participer ou créer.</p>
        <div className="home-container-projects-container">
          <div className="project">
            <div className="project-container">
              <img src={WTM} />
              <h3>What's The Movie </h3>
              <span>
                <p> Jeu développé dans un groupe de 6 développeurs.</p>
                <a
                  href="https://whats-the-movie.timothe-bequet.fr/"
                  target="blank"
                >
                  <ButtonComponent text="Visit website" />
                </a>
              </span>
            </div>
          </div>
          <div className="project">
            <div className="project-container">
              <img src={CotizUpImg} />
              <h3>Cotiz'Up </h3>
              <span>
                <p>Amélioration du back-office existant.</p>
                <a href="https://www.cotizup.com/" target="blank">
                  <ButtonComponent text="Visit website" />
                </a>
              </span>
            </div>
          </div>
          <div className="project">
            <div className="project-container">
              <img src={EurAfrique} alt="" />
              <h3>EurAfrique</h3>
              <span>
                <p>Mise en place d'une liste de gestion des bénévoles.</p>
                <a href="https://dev.eurafrique.eu/" target="blank">
                  <ButtonComponent text="Visit website" />
                </a>
              </span>
            </div>
          </div>
          <div className="project">
            <div className="project-container">
              <img src={ConjugEasy} alt="" />
              <h3>ConjugEasy</h3>
              <span>
                <p>Passage de ceinture de conjugaison.</p>
              </span>
              <a
                href="https://github.com/belkacem-oussama/ConjugEasy-Front"
                target="blank"
              >
                <ButtonComponent text="View repo" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <span className="github-button">
        <a href="https://github.com/belkacem-oussama" target="blank">
          <ButtonComponent text="More on GitHub !" />
        </a>
      </span>

      <div className="home-container-question">
        <h4>Une question ? Un message !</h4>
      </div>
    </div>
  );
}
