import React from 'react';
import partner_1 from '../../../../assets/img/partner_1.svg';
import partner_2 from '../../../../assets/img/partner_2.svg';
const Footer = props => (
  <section className="section has-background-light">
    <div className="container">
      <div className="columns">
        <div className="column has-text-centered">
          <a href={props.links.partner1}>
            <img
              src={partner_2}
              alt={props.links.partner1}
              style={{
                height: '40px'
              }}
              className="animated-svg"
            />
          </a>
        </div>
        <div className="column has-text-centered" />
        <div className="column has-text-centered">
          <a href={props.links.docs} className="button is-primary is-outlined">
            How did we make it?
          </a>
        </div>
        <div className="column has-text-centered" />
        <div className="column has-text-centered ">
          <a href={props.links.partner2}>
            <img
              src={partner_1}
              alt={props.links.partner2}
              style={{
                height: '40px'
              }}
              className="animated-svg"
            />
          </a>
        </div>
      </div>
    </div>
  </section>
);
export default Footer;
