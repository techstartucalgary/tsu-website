import tsu_logo from 'images/logo_white_start.png'
import './HomePage.css';

function HomePage() {
  return (
    <div className="homePage">
      <img className="homePage__logo" src={tsu_logo}></img>
      <div className="homePage__description">Tech Start UCalgary is a new club building software projects and exploring tech entrepreneurship.
      </div>
      <a className="homePage__cta" href="https://linktr.ee/techstartuofc">Learn more about us!</a>

      <p className="homePage__construction">This website is under construction... come back soon!</p>
    </div>
  );
}

export default HomePage;
