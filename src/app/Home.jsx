import React from 'react';
import logo from '../img/logos/text_white.svg';
import partner_1 from '../img/partner_1.svg';
import partner_2 from '../img/partner_2.svg';
import { info } from '../Constants';
import SignupWindow from '../auth/SignupWindow';
import { useGlobalState } from '../state';

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
              <img src={logo} alt="" />
              <h2 className="subtitle is-family-secondary is-size-3">{tagline}</h2>
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
              <a href={links.partner1}>
                <img src={partner_2} alt={links.partner1} style={{ height: '40px' }} />
              </a>
            </div>
            <div className="column has-text-centered" />
            <div className="column has-text-centered">
              <a href={links.docs} className="button is-primary is-outlined">
                How did we make it?
              </a>
            </div>
            <div className="column has-text-centered" />
            <div className="column has-text-centered">
              <a href={links.partner2}>
                <img src={partner_1} alt={links.partner2} style={{ height: '40px' }} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Home;
