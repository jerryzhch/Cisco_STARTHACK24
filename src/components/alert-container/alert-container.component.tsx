import { AccordionItem, Link, AccordionContent, Button, f7, ListItem } from 'framework7-react';
import React from 'react';
import './alert-container.style.less';

const AlertContainer = ({ bed, alertType, distance }) => {
  return (
    <li className="alert-item accordion-item">
      <a href="" className="item-link item-content">
        <div className="item-inner">
          <div className="alert-item-grid">
            <img className="alert-icon" src={`../assets/pictograms/${alertType}.png`} />
            <p className="alert-location">{bed.replace(':', '.')}</p>
            <p className="alert-distance">
              {'Distance'}
              <br />
              {distance}
            </p>
          </div>
        </div>
      </a>
      <AccordionContent className="accept-decline-button-row">
        <div className="grid grid-cols-2">
          <Button large outline className="feedback-button decline-button" onClick={function () {}}>
            Ablehnen
          </Button>
          <Button large outline className="feedback-button accept-button" onClick={function () {}}>
            Annehmen
          </Button>
        </div>
      </AccordionContent>{' '}
    </li>
  );
};
export default AlertContainer;
