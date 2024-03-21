import { Block, BlockTitle, f7 } from 'framework7-react';
import React, { useContext, useEffect, useState } from 'react';
import AlertContainer from './alert-container.component.tsx';
import { PATH_NURSE } from '../../js/routes.ts';
import { onValue, orderByKey, query, ref, remove, Unsubscribe, update } from 'firebase/database';
import { TickerData } from '../../types.ts';
import { FB_AUTH, FB_DATABASE } from '../app.tsx';

const AlertTicker = ({ currentNurse = undefined, showFeebackBtns = true }) => {
  const db = useContext(FB_DATABASE);
  const auth = useContext(FB_AUTH);
  const [tickerData, setTickerData] = useState<TickerData[]>([]);

  const acceptAlert = (id: string) => {
    const alertRef = ref(db, '/nurses/' + currentNurse + '/alerts/' + id);
    const alertsRef = ref(db, '/alerts/' + id);
    const nurseRef = ref(db, 'nurses/' + currentNurse);
    remove(alertRef).then(() => {
      update(alertsRef, { acceptedBy: currentNurse })
        .then(() => {
          update(nurseRef, { available: true });
        })
        .then(() => f7.dialog.alert('Action succeeded', 'Alert successfully accepted'));
    });
  };
  useEffect(() => {
    let unsubscribe: Unsubscribe;
    auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        let dbRefPath = window.location.pathname === PATH_NURSE ? 'nurses/' + currentNurse + '/alerts' : '/alerts';
        unsubscribe = onValue(query(ref(db, dbRefPath), orderByKey()), (snapshot) => {
          const tickerDataArray = [];
          snapshot.forEach((childSnapshot) => {
            tickerDataArray.unshift({
              id: childSnapshot.key,
              alertType: childSnapshot.val().alertType,
              bed: childSnapshot.val().bed,
              distance: childSnapshot.val().distance,
            });
          });
          setTickerData(tickerDataArray);
        });
      }
    });
    return () => unsubscribe();
  }, [currentNurse, tickerData]);

  return (
    <Block inset>
      <BlockTitle>Alert Ticker</BlockTitle>
      <div className="list accordion-list">
        <ul>
          {/*
          <AlertContainer
            showFeebackBtns={showFeebackBtns}
            bed={'1:2'}
            alertType={'nursing'}
            distance={'20 m'}
          ></AlertContainer>
          <AlertContainer
            showFeebackBtns={showFeebackBtns}
            bed={'1:3'}
            alertType={'pain'}
            distance={'20 m'}
          ></AlertContainer>
        */}
          {tickerData &&
            tickerData.map((t) => (
              <AlertContainer
                key={t.id}
                showFeebackBtns={showFeebackBtns}
                alertInfo={t}
                acceptAlert={acceptAlert}
              ></AlertContainer>
            ))}
        </ul>
      </div>
    </Block>
  );
};

export default AlertTicker;
