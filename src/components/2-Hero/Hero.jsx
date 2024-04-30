import "./hero.css";
import Img from "./imgs/desktop computer-bro.png";
import profileImg from "./imgs/me.jpg";
export default function Hero() {
  return (
    <section className="hero">
      <div className="left-section">
        <div className="parent-avatar">
          <img src={profileImg} alt="img not fount" />
          <span className="icon-verified"></span>
        </div>
        <div className="title-container">
          <h1>Frontend Deneloper and UI & UX Designer</h1>
          <p>
            FrontEnd Developer I am a front-end developer and Ui&Ux designer i
            can provide clean code and pixel perfext design. i also make website
            more & more interactive
          </p>
        </div>
        <div className="icons-container">
          <a className="icon icon-facebook-official"></a>
          <a className="icon icon-instagram"></a>
          <a className="icon icon-github"></a>
          <a className="icon icon-linkedin-square"></a>
        </div>
      </div>
      <div className="right-section animation">
        <img src={Img} alt="" />
      </div>
    </section>
  );
}
