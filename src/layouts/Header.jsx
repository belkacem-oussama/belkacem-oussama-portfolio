import { Link } from 'react-router-dom'
import Logo from '../assets/img/portfolio-logo.png'

export default function Header() {
    return (
        <Link to="/">
            <div className="header-component img-thumbnail">
                <img src={Logo} id="icones" />
            </div>
        </Link>
    )
}
