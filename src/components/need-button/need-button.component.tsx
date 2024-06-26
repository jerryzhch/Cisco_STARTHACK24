import { Button, f7 } from 'framework7-react';
import React, { useCallback, useContext } from 'react';
import { PictoTypes } from '../../assets/pictograms/picto-types.js';
import { ref, push } from 'firebase/database';
import './need-button.style.less';
import { BedContext } from '../../pages/patient.tsx';
import { FB_DATABASE } from '../app.tsx';

const NeedButton = ({ type }) => {
  const bed = useContext(BedContext);
  const db = useContext(FB_DATABASE);

  const triggerAlert = useCallback(() => {
    push(ref(db, 'alerts/'), {
      alertType: type,
      bed,
      level: PictoTypes[type].level,
    }).then(() => {
      f7.dialog.alert('Type: ' + PictoTypes[type]?.desc, 'Alert sent');
    });
  }, [type]);

  return (
    PictoTypes[type] && (
      <Button className="need-button" onClick={triggerAlert} large fill>
        <div className="need-button-inner">
          <img className="alert-icon" src={`../../public/pictograms/${PictoTypes[type]?.pictogram}`} />
          {PictoTypes[type]?.desc}
        </div>
      </Button>
    )
  );
};

export default NeedButton;
