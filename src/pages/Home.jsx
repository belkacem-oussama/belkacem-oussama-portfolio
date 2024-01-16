import React from 'react'
import { useEffect } from 'react'
import Fade from 'react-reveal/Fade'

import ButtonComponent from '../components/Button.jsx'

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
import MawaqitImg from '../assets/img/mawaqit.png'

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

    let globalJson = text
    // For Stack Part
    let stackInfos = globalJson.stack.Skills
    let stackArray = Object.values(stackInfos)

    const imgInfo = {
        FrontEnd: FrontEnd,
        BackEnd: BackEnd,
        Tools: Tools,
    }

    // For Project Part
    let projectData = globalJson.projects.project
    let projectArray = Object.values(projectData)

    const projectImgInfo = {
        WTM: WTM,
        CotizUpImg: CotizUpImg,
        EurAfrique: EurAfrique,
        ConjugEasy: ConjugEasy,
        Mawaqit: MawaqitImg,
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
            <Fade clear>
                <div className="home-container-stack">
                    <h1>{text.stack.title}</h1>
                    <p>{text.stack.paragraphe}</p>
                    <div className="home-container-stack-container">
                        {stackArray.map((element, index) => (
                            <div className="item" key={index}>
                                <div className="item-container">
                                    <img
                                        src={imgInfo[element.img]}
                                        alt={element.mainTitle}
                                    />
                                    <h1>{element.title}</h1>
                                    <p>{element.paragraphe}</p>
                                    <ul>
                                        <h1>{element.mainTitle}</h1>
                                        {element.list.map((key, index) => (
                                            <li key={index}>{key}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Fade>
            <Fade clear>
                <div className="home-container-projects">
                    <h1>{text.projects.title}</h1>
                    <p>{text.projects.paragraphe}</p>
                    <div className="home-container-projects-container">
                        {projectArray.map((element, key) => (
                            <div className="project" key={key}>
                                <div className="project-container">
                                    <img src={projectImgInfo[element.img]} />
                                    <h3>{element.title} </h3>
                                    <span>
                                        <p>{element.presentation}</p>
                                        <a href={element.link} target="blank">
                                            <ButtonComponent
                                                text={element.buttonText}
                                            />
                                        </a>
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Fade>
            <span className="github-button">
                <a href={text.others.ghButtonLink} target="blank">
                    <ButtonComponent text={text.others.ghButtonText} />
                </a>
            </span>

            <div className="home-container-question">
                <h4>{text.others.textBottom}</h4>
            </div>
        </div>
    )
}
