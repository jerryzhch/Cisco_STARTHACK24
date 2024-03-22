import { AccordionContent, Button } from 'framework7-react';
import React from 'react';
import './alert-container.style.less';
import { PictoTypes } from '../../assets/pictograms/picto-types.ts';

const AlertContainer = ({ showFeebackBtns, alertInfo, acceptAlert, declineAlert }) => {
  console.log(alertInfo);
  return (
    <li
      className={alertInfo.acceptedBy != undefined ? 'alert-item accordion-item accepted' : 'alert-item accordion-item'}
    >
      <a href="" className="item-link item-content">
        <div className="item-inner">
          <div className="alert-item-grid">
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <img
                className="alert-icon"
                src={`../../public/pictograms/${PictoTypes[alertInfo.alertType].pictogram}`}
              />
              <span style={{ textAlign: 'center' }}>{PictoTypes[alertInfo.alertType].desc}</span>
            </div>
            <div
              style={{
                flexDirection: 'column',
                justifyContent: 'spaceBetween',
                height: '82%',
                textAlign: 'center',
              }}
            >
              <p className="alert-location">{alertInfo.bed.replace(':', '.')}</p>
              {alertInfo.acceptedAt && (
                <span style={{ textAlign: 'center', fontSize: '12px' }}>
                  {new Date(alertInfo.acceptedAt).toLocaleString()}
                </span>
              )}
            </div>
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
            <Button large outline className="feedback-button decline-button" onClick={() => declineAlert(alertInfo.id)}>
              Decline
            </Button>
            <Button large outline className="feedback-button accept-button" onClick={() => acceptAlert(alertInfo.id)}>
              Accept
            </Button>
          </div>
        </AccordionContent>
      )}
    </li>
  );
};
export default AlertContainer;
