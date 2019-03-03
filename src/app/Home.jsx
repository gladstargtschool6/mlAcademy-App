import React from 'react';
import logo from '../img/logos/text_white.svg';
import ucl from '../img/ucl_grey.svg';
import ms from '../img/ms_grey.svg';
import { tagline } from '../Constants';
import SignupWindow from '../auth/SignupWindow';
import { useGlobalState } from '../state';

function Home() {
  const [isAuthenticated] = useGlobalState('auth');
  return (
    <div style={{ '-webkit-overflow-scrolling': 'touch' }}>
      <section id="section1" className="hero is-primary is-fullheight-with-navbar">
        <div
          className="hero-body flex"
          style={{ 'justify-content': 'space-around', 'flex-wrap': 'wrap', width: '100%' }}
        >
          <div className="level-item has-text-centered">
            <div style={{ maxWidth: '95vw' }}>
              <img src={logo} alt="" />
              <h2 className="subtitle focus">{tagline}</h2>
            </div>
          </div>
          {!isAuthenticated && (
            <div style={{ width: '400px' }}>
              <SignupWindow />
            </div>
          )}
        </div>
      </section>
      <br />
      <section id="section2" className="section">
        <div className="columns">
          <div className="column has-text-centered">
            <i className="fab fa-accessible-icon fa-3x" />
            <p className="title">Accessible</p>
            <p>
              Accessibility is paramount with our development process. mlAcademy is WCAG 2.0
              compliant so that nobody is left out.
            </p>
          </div>
          <div className="column has-text-centered">
            <i className="fas fa-university fa-3x" />
            <p className="title">Educational</p>
            <p>
              Designed to be interactive while also providing students with in-depth knowledge of
              the subject.
            </p>
          </div>
          <div className="column has-text-centered">
            <i className="fas fa-edit fa-3x" />
            <p className="title">Flexible</p>
            <p>
              New topics and lessons can be added with ease as markdown files through our content
              management system.
            </p>
          </div>
        </div>
      </section>
      <br />
      <section className="section has-background-light">
        <div className="container">
          <div className="columns">
            <div className="column has-text-centered">
              <a href="https://microsoft.com">
                <img src={ms} alt="Microsoft" style={{ height: '40px' }} />
              </a>
            </div>
            <div className="column has-text-centered" />
            <div className="column has-text-centered">
              <a href="https://docs.mlacademy.cf" className="button is-primary is-outlined">
                How did we make it?
              </a>
            </div>
            <div className="column has-text-centered" />
            <div className="column has-text-centered">
              <a href="https://ucl.ac.uk">
                <img src={ucl} alt="UCL" style={{ height: '40px' }} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Home;