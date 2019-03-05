import React from 'react';
import logo from '../../../assets/img/logos/text_white.png';

import { info } from 'getConstants';
import SignupWindow from '../../SignupWindow/SignupWindow';
import { Link } from 'react-router-dom';
import { useGlobalState } from 'state';
import Footer from './Footer/Footer';
import './Home.scss';
function Home() {
  const [isAuthenticated] = useGlobalState('auth');
  const { features, links, tagline } = info;

  return (
    <div style={{ '-webkit-overflow-scrolling': 'touch' }}>
      <section id="section1" className="hero is-primary is-fullheight-with-navbar">
        <div
          className="hero-body flex"
          style={{ 'justify-content': 'space-around', 'flex-wrap': 'wrap', width: '100%' }}
        >
          <div className="level-item has-text-centered">
            <div style={{ maxWidth: '95vw' }}>
              <img src={logo} alt="" className="animated-svg" style={{ width: '500px' }} />
              <div className="tagline">
                <h2 className="subtitle is-family-secondary is-size-3">{tagline}</h2>
              </div>
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
      <div className="description-container">
        {features.map((feature, index) => (
          <div
            className={`${index % 2 === 1 ? `group has-background-light` : `group-alternative`}`}
          >
            <section className="home-content">
              <p className="title">{feature.title}</p>
              <p>{feature.description}</p>
            </section>
            <aside className="home-aside">
              <img className="image-wrapper" src={feature.image} alt="" />
            </aside>
          </div>
        ))}
        <div className="final-group has-background-primary has-text-centered">
          <Link to="/signup" className="title has-text-white">
            Get Started Now!
          </Link>
        </div>
      </div>

      {/*
      <section id="section2" className="section">
        <div className="columns">
          {features.map(feature => (
            <div className="column has-text-centered">
              <i className={`animated-svg ${feature.icon}`} />
              <p className="title">{feature.title}</p>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>*/}
      <Footer links={links} />
    </div>
  );
}
export default Home;
