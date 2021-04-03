import React from "react";
import "./App.css";
import img_url from "./card-image.jpg";
import img_1 from "./1.jpg";
import img_2 from "./2.jpg";
import { BiCalendarCheck, BiGitMerge, BiMap } from "react-icons/bi";
import { FaInstagram, FaTwitter, FaSass, FaReact } from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3Full, DiJqueryLogo } from "react-icons/di";
import { BsFillBootstrapFill } from "react-icons/bs";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  // useParams,
  // useRouteMatch,
} from "react-router-dom";
function About() {
  return (
    <>
      <div id="about">
        <h2>About me</h2>
        <p>
          I describe my self as someone who's persisant, a quik learner and
          loves problem solving by using simple and scalable solutions.
        </p>
        <h3>
          <span>I'm</span>
          <ul>
            <li>Abdurakhmon Ziyodov</li>
            <li>a Frontend Developer</li>
          </ul>
        </h3>
        <div className="doing">
          <h4>I know</h4>
          <ul>
            <li>
              <div className="icon-a">
                <AiFillHtml5 />
                <p>HTML5</p>
              </div>
              <div></div>
            </li>
            <li>
              <div className="icon-a">
                <DiCss3Full />
                <p>CSS3</p>
              </div>
              <div></div>
            </li>
            <li>
              <div className="icon-a">
                <FaSass />
                <p>SASS</p>
              </div>
              <div></div>
            </li>
            <li>
              <div className="icon-a">
                <BsFillBootstrapFill />
                <p>BOOTSTRAP</p>
              </div>
              <div></div>
            </li>
            <li>
              <div className="icon-a">
                <DiJqueryLogo />
                <p>JQUERY</p>
              </div>
              <div></div>
            </li>
            <li>
              <div className="icon-a">
                <FaReact />
                <p>REACT</p>
              </div>
              <div></div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
// npm run build
function Portfolio() {
  return (
    <div className="Portfoile">
      <div className="card-img">
        <a href="https://onlinewatchmarket.netlify.app/">
          <img src={img_2} alt="2" />
        </a>
        <a href="https://res-uz.netlify.app/">
          <img src={img_1} alt="1" />
        </a>
      </div>
      <div className="link"></div>
    </div>
  );
}
export default function App() {
  return (
    <Router>
      <div id="wrapper">
        <div className="box-left">
          <div className="item-1">
            <img src={img_url} alt="" className="card-image" />
            <h2>
              Ziyodov <b>Abdurahmon</b>
            </h2>
            <button>Web Developer</button>
            <ul className="my-links1">
              <li>
                <a href="https://twitter.com/">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href="https://instagram.com/">
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </div>
          <ul className="my-links2">
            <li>
              <span className="icon_l">
                <BiCalendarCheck />
              </span>
              May 20, 2000
            </li>
            <li>
              <a href="https://www.google.com/maps/place/Samarkand/@39.6406042,66.8278029,11z/data=!3m1!4b1!4m5!3m4!1s0x3f4d191960077df7:0x487636d9d13f2f57!8m2!3d39.627012!4d66.9749731">
                <span className="icon_l">
                  <BiMap />
                </span>
                Samarkand, Uzbekistan
              </a>
            </li>
            <li>
              <a href="https://github.com/Abdurahmon703">
                <span className="icon_l">
                  <BiGitMerge />
                </span>
                <span>Github</span>
              </a>
            </li>
          </ul>
          <div className="telegram">
            <a href="https://t.me/abdurahmonziyodov">Telegram me</a>
          </div>
        </div>
        <div className="box-right">
          <div id="navbar">
            <input type="checkbox" id="check" />
            <ul>
              <li>
                <Link to="/">About me</Link>
              </li>
              <li>
                <Link to="/portfolio">Portfolio</Link>
              </li>
            </ul>
            <label htmlFor="check" className="menu">
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>

          <Switch>
            <Route exact path="/" component={About} />
            <Route path="/portfolio" component={Portfolio} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}
