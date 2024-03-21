import { AccordionContent, Button } from 'framework7-react';
import React from 'react';
import './alert-container.style.less';
import { PictoTypes } from '../../assets/pictograms/picto-types.ts';

const AlertContainer = ({ showFeebackBtns, alertInfo, acceptAlert }) => {
  return (
    <li className="alert-item accordion-item">
      <a href="" className="item-link item-content">
        <div className="item-inner">
          <div className="alert-item-grid">
            <img className="alert-icon" src={`../../public/pictograms/${PictoTypes[alertInfo.alertType].pictogram}`} />
            <p className="alert-location">{alertInfo.bed.replace(':', '.')}</p>
            {alertInfo.distance && (
              <p className="alert-distance">
                {'Distance'}
                <br />
                <span>{Math.round(alertInfo.distance) + ' m'}</span>
              </p>
            )}
          </div>
        </div>
      </a>
      {showFeebackBtns && (
        <AccordionContent className="accept-decline-button-row">
          <div className="grid grid-cols-2">
            <Button large outline className="feedback-button decline-button" onClick={function () {}}>
              Ablehnen
            </Button>
            <Button large outline className="feedback-button accept-button" onClick={() => acceptAlert(alertInfo.id)}>
              Annehmen
            </Button>
          </div>
        </AccordionContent>
      )}
    </li>
  );
};
export default AlertContainer;
