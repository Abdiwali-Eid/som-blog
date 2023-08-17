import React from 'react';
import work1 from './/../images/sombooks.PNG';
import work2 from './/../images/workouts.PNG';
import work3 from './/../images/pharmcy.PNG';
import work4 from './/../images/filantechs.PNG';
import work5 from './/../images/work5.jpg';
import work6 from './/../images/work6.jpg';
import work7 from './/../images/faseex design.PNG';
import work8 from './/../images/graphic design.PNG';
import work9 from './/../images/quran.PNG';
import { BsLinkedin } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsYoutube } from 'react-icons/bs';
import { BsCodeSquare } from 'react-icons/bs';
import { AiOutlineAntDesign } from 'react-icons/ai';
import { SiAdobeindesign } from 'react-icons/si';
import { BsFacebook } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import CV from './/../images/CV.pdf';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {} from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  return (
    <>
      <header>
        <a href="#" class="logo">
          Abdiwali
        </a>
        <nav class="navigation">
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          {/* <a href="#contact">Contact</a> */}
        </nav>
      </header>
      <section class="main">
        <div className="qoral">
          <h2 className="hello">
            Hello, I'm Abdiwali Eid
            <br />
            <span>Software Developer</span>
          </h2>
          {/* <h3>I build life changing courses</h3> */}
          <a href={CV} download class="main-btn">
            Download my CV
          </a>
          <div class="social-icons">
            <a href="https://www.linkedin.com/in/abdiwali-bashir-1949701ba">
              <BsLinkedin className="i" />
            </a>
            <a href="https://twitter.com/CabdiwaliBashir?t=tggaxEPlKue4NBvEmST3GQ&s=09">
              <BsTwitter className="i" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100022010565081">
              <BsFacebook className="i" />
            </a>
            <a href="https://github.com/Abdiwali-Eid">
              <BsGithub className="i" />
            </a>
          </div>
        </div>
      </section>

      <section class="cards" id="services">
        <h2 class="title">Services</h2>
        <div class="content">
          <div class="card">
            <div class="icon">
              <AiOutlineAntDesign />
            </div>
            <div class="info">
              <h3>Web design</h3>
              <p>
                conceptualizing and implementing creative ideas for client
                websites.
              </p>
            </div>
          </div>
          <div class="card">
            <div class="icon">
              <BsCodeSquare />
            </div>
            <div class="info">
              <h3>Web development</h3>
              <p>
                Creating well-designed and tested code using best practices for
                web development
              </p>
            </div>
          </div>
          <div class="card">
            <div class="icon">
              <SiAdobeindesign />
            </div>
            <div class="info">
              <h3>Graphic design</h3>
              <p>
                Creating aesthetically pleasing images that accompany written
                text.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="projects" id="projects">
        <h2 class="title">Projects</h2>
        <div class="content">
          <div class="project-card">
            <div class="project-image">
              <img src={work1} />
            </div>
            <div class="project-info">
              <p class="project-category">Web Development</p>
              <strong class="project-title">
                <span>Som Books</span>
                <a href="https://sombooks.vercel.app/" class="more-details">
                  More details
                </a>
              </strong>
            </div>
          </div>
          <div class="project-card">
            <div class="project-image">
              <img src={work2} />
            </div>
            <div class="project-info">
              <p class="project-category">UI/UX</p>
              <strong class="project-title">
                <span>Workout</span>
                <a
                  href="https://www.figma.com/file/N9flo21jodCODFfScXCZUQ/Untitled?type=design&node-id=0%3A1&mode=design&t=vH5stQc0jViysRBf-1"
                  class="more-details"
                >
                  More details
                </a>
              </strong>
            </div>
          </div>
          <div class="project-card">
            <div class="project-image">
              <img src={work3} />
            </div>
            <div class="project-info">
              <p class="project-category">Web Development</p>
              <strong class="project-title">
                <span>Pharmacy System</span>
                {/* <a href="#" class="more-details">
                  More details
                </a> */}
              </strong>
            </div>
          </div>
          <div class="project-card">
            <div class="project-image">
              <img src={work9} />
            </div>
            <div class="project-info">
              <p class="project-category">Web Development</p>
              <strong class="project-title">
                <span>Hifdi Quiz</span>
                <a
                  href="https://quran-tijaabo.vercel.app/"
                  class="more-details"
                >
                  More details
                </a>
              </strong>
            </div>
          </div>
          <div class="project-card">
            <div class="project-image">
              <img src={work4} />
            </div>
            <div class="project-info">
              <p class="project-category">UI/UX</p>
              <strong class="project-title">
                <span>FilanTech</span>
                <a
                  href="https://www.figma.com/file/jt7hOhxiPuVlJp52VYkSL3/Design-System?type=design&node-id=0%3A1&mode=design&t=5tZTz8c9NJg89jDr-1"
                  class="more-details"
                >
                  More details
                </a>
              </strong>
            </div>
          </div>
          {/* <div class="project-card">
            <div class="project-image">
              <img src={work4} />
            </div>
            <div class="project-info">
              <p class="project-category">UI/UX</p>
              <strong class="project-title">
                <span>FilanTech</span>
                <a
                  href="https://www.figma.com/file/jt7hOhxiPuVlJp52VYkSL3/Design-System?type=design&node-id=0%3A1&mode=design&t=5tZTz8c9NJg89jDr-1"
                  class="more-details"
                >
                  More details
                </a>
              </strong>
            </div>
          </div> */}
          <div class="project-card">
            <div class="project-image">
              <img src={work7} />
            </div>
            <div class="project-info">
              <p class="project-category">Graphic design</p>
              <strong class="project-title">
                <span>Faseex</span>
                <a
                  href="https://github.com/Abdiwali-Eid/Faseex"
                  class="more-details"
                >
                  More details
                </a>
              </strong>
            </div>
          </div>
          <div class="project-card">
            <div class="project-image">
              <img src={work8} />
            </div>
            <div class="project-info">
              <p class="project-category">Graphic design</p>
              <strong class="project-title">
                <span>Fast</span>
                <a
                  href="https://github.com/Abdiwali-Eid/Fast"
                  class="more-details"
                >
                  More details
                </a>
              </strong>
            </div>
          </div>
          {/* <div class="project-card">
            <div class="project-image">
              <img src={work5} />
            </div>
            <div class="project-info">
              <p class="project-category">Script Writing & Video Production</p>
              <strong class="project-title">
                <span>Dev Books</span>
                <a href="#" class="more-details">
                  More details
                </a>
              </strong>
            </div>
          </div> */}
          {/* <div class="project-card">
            <div class="project-image">
              <img src={work6} />
            </div>
            <div class="project-info">
              <p class="project-category">Script Writing & Video Production</p>
              <strong class="project-title">
                <span>Internet</span>
                <a href="#" class="more-details">
                  More details
                </a>
              </strong>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default Home;
