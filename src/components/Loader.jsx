import PortfolioBeardImg from "../assets/img/portfolio-beard.png";

export default function Loader() {
  return (
    <div className="loader-container">
      <div className="loader-component">
        <span className="loader-component-beard">
          <img src={PortfolioBeardImg} alt="Beard" />
        </span>
      </div>
    </div>
  );
}
