import "./AboutModule.css";
import { Link } from "react-router-dom";
import andrew from "../../images/andrew2.png";
import cv from "./Andres Velata CV.pdf";
const Me = () => {
  return (
    <div className="about-wrapper">
      <Link to="/home" className="backHome">
        <span>BACK HOME</span>
      </Link>
      <div className="about-left">
        <div className="shadow">
          <div className="about-img">
            <a href="https://www.linkedin.com/in/andres-velata/">
              <img
                src="https://scontent.fltx1-1.fna.fbcdn.net/v/t1.6435-9/74387942_3170784979605012_3312521409967685632_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_ohc=cIIWt__vTmUAX-7CIbm&tn=OlQt3g5CzP4zS1OJ&_nc_ht=scontent.fltx1-1.fna&oh=00_AfDP-j1QWeY4cU9CTLFtsA1o_cxSk-t3b-8N1kJlO0CRJQ&oe=6402CF6B"
                alt="Andrew"
              />
            </a>
          </div>

          <h1>Andres Velata</h1>
          <h3>Engineer of TIC's</h3>
          <section className="buttons"></section>
        </div>
      </div>
      <div className="about-right">
        <h1>
          Andrew Developer<span>!</span>
        </h1>
        <h2>Here's who I am & what I do</h2>
        <div className="about-btns">
          <a href={cv} download>
            <button type="button" className="btn btn-pink">
              resume / CV
            </button>
          </a>
          <a href="https://github.com/AndrewVel">
            <button type="button" className="btn btn-white">
              Git hub
            </button>
          </a>
          <a href="https://www.linkedin.com/in/andres-velata/">
            <button type="button" className="btn btn-pink">
              Linkedin
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Me;
