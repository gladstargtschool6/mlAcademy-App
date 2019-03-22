import React, { useGlobal } from 'reactn';
import { A } from 'hookrouter';
import styled from 'styled-components';

import { info } from '../../assets/constants';

import Footer from './Footer/Footer';
import './Home.scss';

import logo from '../../assets/img/logos/text_white.png';

const MSButton = styled.button`
  -moz-appearance: none;
  -webkit-appearance: none;
  border: none;

  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-around;

  height: 2.25em;

  line-height: 1.5;
  position: relative;
  cursor: pointer;

  color: white;
  background-color: #0067b7;
  width: 350px;
  height: 45px;
  border-radius: 0;
  box-shadow: 0px 11px 39px -11px #000;
  font-size: 1.5rem;
  :hover {
    background-color: #0060ac;
    color: #eee;
  }
`;

function Home() {
  const { features, tagline } = info;
  const [user] = useGlobal('user');

  return (
    <div style={{ '-webkit-overflow-scrolling': 'touch' }}>
      <div className="splash-bg">
        <header>
          <div className="stripes">
            <span />
            <span />
            <span />
            <span />
          </div>
          <section className="splash-container full-height-bg ">
            <div className="logo-container has-text-centered">
              <div style={{ maxWidth: '95vw' }}>
                <img src={logo} alt="" className="animated-svg" style={{ width: '500px' }} />
                <div className="tagline">
                  <h2 className="subtitle is-family-secondary">{tagline}</h2>
                </div>
              </div>
            </div>
            {!user && (
              <MSButton type="button" as={A} href="/login">
                <p>Sign In With Microsoft</p>
                <i className="fab fa-microsoft fa-lg" />
              </MSButton>
            )}
          </section>
        </header>
      </div>
      <br />
      <div className="description-container">
        {features.map((feature, index) => (
          <div
            key={feature.title}
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
        <div className="final-group primary-grad has-text-centered">
          <A href="/login" className="title has-text-white">
            Get Started Now!
          </A>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Home;
