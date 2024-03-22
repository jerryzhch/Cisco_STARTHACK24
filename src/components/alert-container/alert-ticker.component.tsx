import { Block, BlockTitle, f7 } from 'framework7-react';
import React, { useContext, useEffect, useState } from 'react';
import AlertContainer from './alert-container.component.tsx';
import { PATH_NURSE } from '../../js/routes.ts';
import { onValue, orderByKey, query, ref, remove, serverTimestamp, update } from 'firebase/database';
import { TickerData } from '../../types.ts';
import { FB_DATABASE } from '../app.tsx';

const AlertTicker = ({ currentNurse = undefined, showFeebackBtns = true }) => {
  const db = useContext(FB_DATABASE);
  const [tickerData, setTickerData] = useState<TickerData[]>([]);

  const acceptAlert = (id: string) => {
    const alertRef = ref(db, '/nurses/' + currentNurse + '/alerts/' + id);
    const alertsRef = ref(db, '/alerts/' + id);
    const nurseRef = ref(db, 'nurses/' + currentNurse);
    update(alertRef, { acceptedBy: currentNurse, acceptedAt: serverTimestamp() }).then(() => {
      update(alertsRef, { acceptedBy: currentNurse, acceptedAt: serverTimestamp() })
        .then(() => {
          update(nurseRef, { available: true });
        })
        .then(() => f7.dialog.alert('Action succeeded', 'Alert successfully accepted'));
    });
  };

  const declineAlert = (id: string) => {
    const alertRef = ref(db, '/nurses/' + currentNurse + '/alerts/' + id);
    const alertsRef = ref(db, '/alerts/' + id);
    const nurseRef = ref(db, 'nurses/' + currentNurse);
    remove(alertRef).then(() => {
      update(alertsRef, { declinedBy: currentNurse, declinedAt: serverTimestamp(), delegatedTo: null })
        .then(() => {
          update(nurseRef, { available: true });
        })
        .then(() => f7.dialog.alert('Action succeeded', 'Alert declined'));
    });
  };
  useEffect(() => {
    let dbRefPath = window.location.pathname === PATH_NURSE ? 'nurses/' + currentNurse + '/alerts' : '/alerts';
    const unsubscribe = onValue(query(ref(db, dbRefPath), orderByKey()), (snapshot) => {
      const tickerDataArray = [];
      console.log(snapshot.val());
      snapshot.forEach((childSnapshot) => {
        tickerDataArray.unshift({
          id: childSnapshot.key,
          alertType: childSnapshot.val().alertType,
          bed: childSnapshot.val().bed,
          acceptedBy: childSnapshot.val().acceptedBy,
          acceptedAt: childSnapshot.val().acceptedAt,
          distance: childSnapshot.val().distance,
        });
        setTickerData(tickerDataArray);
      });
    });
    return () => {
      unsubscribe();
    };
  }, [currentNurse]);

  return (
    <Block inset>
      <BlockTitle>Alert Ticker</BlockTitle>
      <div className="list accordion-list">
        <ul>
          {tickerData &&
            tickerData.map((t) => (
              <AlertContainer
                key={t.id}
                showFeebackBtns={showFeebackBtns && !t.acceptedBy}
                alertInfo={t}
                acceptAlert={acceptAlert}
                declineAlert={declineAlert}
              ></AlertContainer>
            ))}
        </ul>
      </div>
    </Block>
  );
};

export default AlertTicker;
