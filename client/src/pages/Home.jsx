import "../assets/styles/styles.scss";

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-container-main">
        <h1>BELKACEM Oussama</h1>
        <h5>Front-End Developer</h5>
        <p>Je fais ce que j'aime !</p>
      </div>
      <div className="home-container-presentation">
        <h2>Hey, Salut, Salam !</h2>
        <h3>Moi c'est Oussama, enchanté !</h3>
        <p>
          Depuis le début de mon parcours en tant que dévelopeur, j'ai effectué
          des travaux à distance pour des sociétés commerciales, consulté pour
          des clients dans l'enseignement et collaboré avec des personnes
          talentueuses pour créer des produits numériques à la fois pour un
          usage professionnel et grand public. Je suis naturellement curieux et
          je travaille constamment sur l'amélioration de mes compétences.
        </p>
      </div>
      <div className="home-container-stack">
        <div className="home-container-stack-container">
          <div className="front">
            <h1>Front-End</h1>
            <ul>
              <li>HTML/CSS/SCSS</li>
              <li>JavaScript</li>
              <li>React.js</li>
            </ul>
          </div>
          <div className="back">
            <h1>Back-End</h1>
            <ul>
              <li>PHP</li>
              <li>Symfony/Laravel</li>
              <li>Node.js</li>
            </ul>
          </div>
          <div className="tools">
            <h1>Outils</h1>
            <ul>
              <li>GitHub</li>
              <li>WordPress</li>
              <li>Docker</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="home-container-projects">
        <h1>Projets réalisés</h1>
        <p>Quelques projets auxquels j'ai pu participer ou créer.</p>
        <div className="home-container-projects-container">
          <div className="project">
            <h3>What's The Movie</h3>
            <span>
              <p>What's The Movie details</p>
            </span>
          </div>
          <div className="project">
            <h3>Cotiz'Up</h3>
            <span>
              <p>Cotiz'Up details</p>
            </span>
          </div>
          <div className="project">
            <h3>EurAfrique</h3>
            <span>
              <p>EurAfrique details</p>
            </span>
          </div>
          <div className="project">
            <h3>ConjugEasy</h3>
            <span>
              <p>ConjugEasy details</p>
            </span>
          </div>
          <div className="project">
            <h3>Open Source</h3>
            <span>
              <p>Open Source details</p>
            </span>
          </div>
          <button>More on GitHub !</button>
        </div>
      </div>
      <div className="home-container-question">
        <h4>Une question ? Un message.</h4>
      </div>
    </div>
  );
}
