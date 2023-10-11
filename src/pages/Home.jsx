import React from 'react'
import ButtonComponent from '../components/Button.jsx'
import { useEffect } from 'react'
import Typed from 'typed.js'

import text from '../assets/json/text.json'

import Beard from '../assets/img/portfolio-beard.png'
import PortfolioIMG from '../assets/img/portfolio-picture.png'
import FrontEnd from '../assets/img/front-end.png'
import BackEnd from '../assets/img/back-end.png'
import Tools from '../assets/img/tools.png'
import WTM from '../assets/img/whats-the-movie.png'
import CotizUpImg from '../assets/img/cotizup.png'
import EurAfrique from '../assets/img/eurafrique.png'
import ConjugEasy from '../assets/img/ConjugEasy.png'

export default function Home() {
    // Dynamic title
    const el = React.useRef(null)

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: [
                'Web Developer',
                'Front-end Developer',
                'Back-end Developer',
                'French guy',
                'Football player',
                'Mugiwara',
                'Jiu-jitsu-ka',
            ],
            loop: true,
            typeSpeed: 50,
            backDelay: 1000,
            showCursor: false,
        })

        return () => {
            typed.destroy()
        }
    }, [])

    // For Stack Part
    let jsonInfos = text.stack
    let jsonArray = Object.values(jsonInfos)

    const imgInfo = {
        FrontEnd: FrontEnd,
        BackEnd: BackEnd,
        Tools: Tools,
    }

    return (
        <div className="home-container">
            <div className="home-container-main typed-output">
                <h1 ref={el}></h1>
                <p>{text.title}</p>
                <img src={Beard} id="img" />
            </div>
            <div className="ribambelle">
                <img src={PortfolioIMG} />
            </div>
            <div className="home-container-presentation">
                <div className="home-container-presentation-container">
                    <h2>{text.hello}</h2>
                    <h3>{text.introduction}</h3>
                    <p>{text.presentation}</p>
                </div>
            </div>
            <div className="home-container-stack">
                <div className="home-container-stack-container">
                    {jsonArray.map((element, index) => (
                        <div className="item" key={index}>
                            <div className="item-container">
                                <img
                                    src={imgInfo[element.img]}
                                    alt={element.mainTitle}
                                />
                                <h1>{element.mainTitle}</h1>
                                <p>{element.paragraphe}</p>
                                <ul>
                                    <h1>Langages</h1>
                                    {element.list.map((key, index) => (
                                        <li key={index}>{key}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
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
                                <p>
                                    {' '}
                                    Jeu développé dans un groupe de 6
                                    développeurs.
                                </p>
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
                                <a
                                    href="https://www.cotizup.com/"
                                    target="blank"
                                >
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
                                <p>
                                    Mise en place d'une liste de gestion des
                                    bénévoles.
                                </p>
                                <a
                                    href="https://dev.eurafrique.eu/"
                                    target="blank"
                                >
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
    )
}
