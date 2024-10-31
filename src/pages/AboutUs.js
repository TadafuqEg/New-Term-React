import React from 'react';
import { useTheme, toggleTheme } from '../context/ContextTheme';
import { IoPerson } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import "../App.css";
import Navbar from '../components/nav';
import img1 from "../assets/imgs/trust/img41.png";
import img2 from "../assets/imgs/trust/img43.png";
import img3 from "../assets/imgs/trust/img44.png";
import img19 from "../assets/imgs/trust/img45.png";
import img40 from "../assets/imgs/trust/img46.png";
import img4 from "../assets/imgs/trust/img46-2.jpeg";
import img50 from "../assets/imgs/trust/img47.png";
import img5 from "../assets/imgs/trust/img47-2.jpeg";
import img6 from "../assets/imgs/trust/img48.png";
import img7 from "../assets/imgs/trust/img49.png";
import img8 from "../assets/imgs/trust/img50.png";
import img9 from "../assets/imgs/trust/img51.png";
import img10 from "../assets/imgs/trust/img52.png";
import img11 from "../assets/imgs/trust/img53.png";
import img120 from "../assets/imgs/trust/img54.png";
import img12 from "../assets/imgs/trust/img54-2.jpeg";
import img13 from "../assets/imgs/trust/img55.png";
import img14 from "../assets/imgs/trust/img56.png";
import img150 from "../assets/imgs/trust/img57.png";
import img15 from "../assets/imgs/trust/img57-2.jpeg";
import img16 from "../assets/imgs/trust/img58.png";
import img17 from "../assets/imgs/trust/img59.png";
import img18 from "../assets/imgs/trust/img60.png";



const About = () => {
  const { theme, toggleTheme } = useTheme();

  return <div id='togg' className={`page ${theme}`}>
    <div className='fixxed'>
      <a href='login'> <IoPerson className='person' /></a>
      <a> <FaCartShopping className='basket' /> </a>
      <svg onClick={toggleTheme} stroke="currentColor" stroke-width="0" viewBox="0 0 16 16"
        className="dark-toggle hidden md:block text-purple-700 mt-1 ml-2 cursor-pointer"
        height="26" width="26" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z">
        </path>
        <path
          d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z">
        </path>
      </svg>
    </div>
    <div className='about'>
      <Navbar />
      <div className='sec-1'>
        <h2 className='about-h'>TADAFUQ AND ELKA : Joining
          Forces to Create a New Era</h2>
        <p className='about-p'>
          In a significant merger, Tadafuq Information Technology (TIT) specialized in advanced software solutions and
          IT services and Elka, an innovative marketing research and consulting company have joined forces to create TERM.
          This strategic move enhances their competitive edge, facilitates global expansion, and fosters a collaborative culture.
          TERM's vision emphasizes ethical reputation management and trust as foundational to sustained success in today's
          interconnected business landscape.</p>
        <a href='/contact'><button>Contact Us</button></a>
        <span className='line-1'></span>
      </div>
      <div className="power-house">
        <div className="power-content">
          <h5>TERM : A Modern<br /> Powerhouse</h5>
          <p>TERM exemplifies modern ingenuity and technological prowess. It offers holistic consulting and
            intelligence solutions that resonate with the demands of today's digital landscape. At its core is
            the
            revolutionary TERM Deep WEBINT (TDW), an amalgamation of automated web-based data collection Tools
            and
            the latest in APIbased data collection solutions. This comprehensive suite encompasses both passive
            and
            active WEBINT methods, resulting in a dynamic, real-time approach to data analysis.
          </p>
          <a href='/contact'><button>Discover What Sets Us Apart</button></a>
        </div>
        <div className="line"></div>
      </div>
      <div className="deep">
        <div className="deep-content">
          <h5>TERM Deep WEBINT (TDW) : A fusion of excellence</h5>
          <p>The distinctive essence of TDW lies in its unique blend of technology and human expertise. By
            leveraging the sophisticated technological capabilities of TIT and the seasoned acumen of ELKA, TDW
            transcends traditional data solutions. Through swift data collection from diverse web sources,
            including social networks and web analytics tools, TDW provides unparalleled insights. It allows
            businesses to navigate the digital landscape with precision, extracting valuable insights that
            inform strategic decisionmaking. It's this dynamic fusion that sets TDW apart, making it an
            unrivaled offering in the global arena of digital intelligence and brand influence
          </p>
          <a href='/contact'><button>Join us and Turn Conversations into Opportunities</button></a>
        </div>
        <div className="line"></div>
      </div>
      <div className="about-meet">
        <h5>Meet Our Team</h5>
        <p>
          At the heart of our success is an extraordinary team of experts, each dedicated to driving innovation
          and
          delivering exceptional results. Our diverse team brings together a wealth of knowledge and experience
          across all facets of social listening, social action, and marketing strategy consulting.
        </p>
        <div className="monitoring-content meet-cards">
          <div className="monitoring-card">
            <h5>Social Listening Specialists</h5>
            <p>Experts in monitoring and analyzing online conversations to uncover valuable insights.</p>
          </div>
          <div className="monitoring-card">
            <h5>Data Analysts</h5>
            <p>Skilled professionals who transform raw data into actionable intelligence.</p>
          </div>
          <div className="monitoring-card">
            <h5>Marketing Strategists</h5>
            <p>Visionary thinkers who craft and execute compelling marketing campaigns.</p>
          </div>
          <div className="monitoring-card">
            <h5>Content Creators</h5>
            <p>Talented writers and designers who produce engaging and impactful content.</p>
          </div>
          <div className="monitoring-card">
            <h5>Public Relations Experts</h5>
            <p>Masters at managing brand reputation and fostering positive media relationships.</p>
          </div>
          <div className="monitoring-card">
            <h5>Client Success Managers</h5>
            <p>Dedicated professionals ensuring our clients achieve their goals and maximize their ROI.</p>
          </div>
          <div className="monitoring-card">
            <h5>Technical Support Team</h5>
            <p>Reliable tech gurus who maintain our advanced platforms and provide top-notch support.</p>
          </div>
        </div>
        <p>Together, we are committed to empowering our clients with the tools and strategies needed to thrive in a
          dynamic digital landscape. Our collaborative approach and passion for excellence ensure that we not only
          meet but exceed our clients' expectations.

        </p>
        <a href='/contact'><button>Join Us on a Journey to Success</button></a>
      </div>
      <div className="about-partenrs">
        <h5>Our Trusted Partners</h5>
        <p>Building on the legacy of our founding companies, we are honored to present the esteemed clients who have
          trusted us over the years. These partnerships highlight the rich history and enduring excellence that
          form the cornerstone of our new venture
        </p>
        <div class="about-trust">
          <div><img src={img1} alt="1" /></div>
          <div><img src={img2} alt="2" /></div>
          <div><img src={img3} alt="3" /></div>
          <div><img src={theme === 'light' ? img40 : img4} alt="4" /></div>
          <div><img src={theme === 'light' ? img50 : img5} alt="5" /></div>
          <div><img src={img6} alt="6" /></div>
          <div><img src={img7} alt="7" /></div>
          <div><img src={img8} alt="8" /></div>
          <div><img src={img9} alt="9" /></div>
          <div><img src={img10} alt="10" /></div>
          <div><img src={img11} alt="11" /></div>
          <div><img src={theme === 'light' ? img120 : img12} alt="12" /></div>
          <div><img src={img13} alt="13" /></div>
          <div><img src={img14} alt="14" /></div>
          <div><img src={theme === 'light' ? img150 : img15} alt="15" /></div>
          <div><img src={img16} alt="16" /></div>
          <div><img src={img17} alt="17" /></div>
          <div><img src={img18} alt="18" /></div>
          <div><img src={img19} alt="19" /></div>
        </div>
        <a href='/contact'><button> Join the Legacy</button></a>

      </div>
    </div>
  </div>;
};

export default About;
