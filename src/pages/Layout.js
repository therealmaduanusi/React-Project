import { Outlet, Link } from "react-router-dom";
import logo from './img/logo.png'
import img from './img/ELC.png'
import img2 from './img/BL1.png'
import img3 from './img/ED.png'
import img4 from './img/EUR.svg'
import img5 from './img/FL1.png'
import img6 from './img/PD.png'
import img7 from './img/PPL.png'
import img8 from './img/SA.png'
import img9 from './img/PL.png'
import img10 from './img/CL.png'
const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
      <header>
        <img src={logo} alt="logo" className="img-logo"></img>
        <p>All Competitions</p>
      </header>
      <main className="main-content">
        {/* first wrap */}
        <div className="first-wrap, wraps">
          <div>
            <img src={img} alt="logo"></img>
            <h4>Championship</h4>
          </div>
          <div>
            <img src={img9} alt="logo"></img>
            <h4>Premier League</h4>

          </div>
        </div>
        {/* 2nd wrap */}
        <div className="second-wrap, wraps">
          <div>
            <img src={img10} alt="logo"></img>
            <h4>UEFA Champion League</h4>
          </div>
          <div>
            <img src={img4} alt="logo"></img>
            <h4>European Championship</h4>
          </div>
        </div>
        {/* 3rd wrap */}
        <div className="third-wrap, wraps">
          <div>
            <img src={img5} alt="logo"></img>
            <h4>League 1</h4>
          </div>
          <div>
            <img src={img2} alt="logo"></img>
            <h4>Bundesliga</h4>
          </div>
        </div>
        {/* 4th wrap */}
        <div className="forth-wrap, wraps">
          <div>
            <img src={img8} alt="logo"></img>
            <h4>Seria A</h4>
          </div>
          <div>
            <img src={img3} alt="logo"></img>
            <h4>Eredivisie</h4>
          </div>
        </div>
        {/* 5th wrap */}
        <div className="firth-wrap, wraps">
          <div>
            <img src={img7} alt="logo"></img>
            <h4>Primeira</h4>
          </div>
          <div>
          <img src={img6} alt="logo"></img>
            <h4>Primera Division</h4>
          </div>
        </div>
      </main>

    </>
  )
};

export default Layout;