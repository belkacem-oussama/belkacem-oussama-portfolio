import GmailIMG from '../assets/img/gmail.png'
import LinkedIn from '../assets/img/linkedin.png'
import Twitter from '../assets/img/twitter.png'

export default function Footer() {
    return (
        <div className="footer-component">
            <div className="footer-component-socials">
                <a href="mailto:oussama.blkc@gmail.com">
                    <div className="socials">
                        <img src={GmailIMG} alt="" id="icones" />
                    </div>
                </a>
                <a
                    href="https://www.linkedin.com/in/oussama-belkacem-767717196/"
                    target="blank"
                >
                    <div className="socials">
                        <img src={LinkedIn} alt="" id="icones" />
                    </div>
                </a>
                <a href="https://twitter.com/ob__tech">
                    <div className="socials">
                        <img src={Twitter} alt="" id="icones" />
                    </div>
                </a>
            </div>
        </div>
    )
}
