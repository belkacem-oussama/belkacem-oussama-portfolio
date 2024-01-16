import { useParams } from 'react-router-dom'

import text from '../assets/json/text.json'

import ButtonComponent from '../components/Button.jsx'

import WTM from '../assets/img/project/whats-the-movie.png'
import CotizUpImg from '../assets/img/project/cotizup.png'
import EurAfrique from '../assets/img/project/eurafrique.png'
import ConjugEasy from '../assets/img/project/ConjugEasy.png'
import SFive from '../assets/img/project/SFive.png'

import ReactIMG from '../assets/img/techno/react-icon.png'
import JavascriptIMG from '../assets/img/techno/javascript-icon.png'
import TypescriptIMG from '../assets/img/techno/Typescript-icon.png'
import PHPIMG from '../assets/img/techno/php-icon.png'
import SassIMG from '../assets/img/techno/sass-icon.png'
import GitHubIMG from '../assets/img/techno/github-icon.png'
import DockerIMG from '../assets/img/techno/docker-icon.png'
import SQLIMG from '../assets/img/techno/SQL-icon.png'

import eurafrique1 from '../assets/img/samples/eurafrique/eurafrique1.png'
import eurafrique2 from '../assets/img/samples/eurafrique/eurafrique2.png'

import cotizup1 from '../assets/img/samples/cotizup/cotizup1.jpeg'
import cotizup2 from '../assets/img/samples/cotizup/cotizup2.jpeg'

export default function Project() {
    const { id } = useParams()
    const globalJson = Object.values(text.projects.project)

    const selectedProject = globalJson.find(
        (project) => project.id === parseInt(id)
    )

    const imageMap = {
        1: WTM,
        2: CotizUpImg,
        3: EurAfrique,
        4: ConjugEasy,
        6: SFive,
    }

    const TechnoIMGMap = {
        Javascript: JavascriptIMG,
        Typescript: TypescriptIMG,
        'Node.js/Express': JavascriptIMG,
        'React.JS': ReactIMG,
        PHP: PHPIMG,
        'PHP/Symfony': PHPIMG,
        Docker: DockerIMG,
        SQL: SQLIMG,
        SASS: SassIMG,
        'Git/GitHub': GitHubIMG,
    }

    const IMGByProjectMAP = {
        EurAfrique: [eurafrique1, eurafrique2],
        "Cotiz'Up": [cotizup1, cotizup2],
    }

    const technoBubble = selectedProject.technologies.map(
        (technologie, index) => (
            <span key={index} className="project-list-technologies-bubbles">
                <img
                    src={TechnoIMGMap[technologie]}
                    alt={technologie}
                    title={technologie}
                />
            </span>
        )
    )

    const galleryImages = IMGByProjectMAP[selectedProject.title].map(
        (image, index) => {
            return <img key={index} src={image} alt={`Gallery ${index + 1}`} />
        }
    )

    return (
        <div className="project-list-container">
            <div className="project-list-title">
                <span className="project-list-title-img">
                    <img
                        src={imageMap[selectedProject.id]}
                        alt={selectedProject.title}
                    />
                </span>
                <h1>{selectedProject.title}</h1>
            </div>
            <div className="project-list-technologies">
                <div className="project-list-technologies-container">
                    {technoBubble}
                </div>
            </div>
            <div className="project-list-description">
                <span className="project-list-description-presentation">
                    <h1>Description</h1>
                    <h5>{selectedProject.presentation}</h5>
                    <p>{selectedProject.decscription}</p>
                </span>
            </div>
            <div className="project-list-gallery">{galleryImages}</div>
            <div className="project-list-button">
                <a href={selectedProject.link} target="blank">
                    <ButtonComponent text="View repo" />
                </a>
            </div>
        </div>
    )
}
