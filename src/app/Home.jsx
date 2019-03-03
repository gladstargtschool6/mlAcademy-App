import React from 'react';
import logo from '../img/logos/text_white.svg';
import ucl from '../img/ucl_grey.svg';
import ms from '../img/ms_grey.svg';
import { tagline, features } from '../Constants';
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
          {features.map(feature => (
            <div className="column has-text-centered">
              <i className={feature.icon} />
              <p className="title">{feature.title}</p>
              <p>{feature.description}</p>
            </div>
          ))}
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
