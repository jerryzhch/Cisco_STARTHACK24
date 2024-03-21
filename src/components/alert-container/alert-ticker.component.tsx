import { Block, BlockTitle } from 'framework7-react';
import React, { useContext, useEffect, useState } from 'react';
import AlertContainer from './alert-container.component.tsx';
import { PATH_DASHBOARD, PATH_NURSE } from '../../js/routes.ts';
import { onValue, orderByKey, query, ref, Unsubscribe } from 'firebase/database';
import { TickerData } from '../../types.ts';
import { FB_AUTH, FB_DATABASE } from '../app.tsx';

const AlertTicker = ({ showFeebackBtns = true }) => {
  const db = useContext(FB_DATABASE);
  const auth = useContext(FB_AUTH);
  const [tickerData, setTickerData] = useState<TickerData[]>([]);

  useEffect(() => {
    let unsubscribe: Unsubscribe;
    auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        if (window.location.pathname === PATH_NURSE) {
          unsubscribe = onValue(query(ref(db, 'nurses/' + currentUser.uid + '/alerts'), orderByKey()), (snapshot) => {
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
        } else if (window.location.pathname === PATH_DASHBOARD) {
          unsubscribe = onValue(query(ref(db, 'alerts/'), orderByKey()), (snapshot) => {
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
      }
    });
    console.log(tickerData);
    return () => unsubscribe();
  }, []);

  return (
    <Block inset>
      <BlockTitle>Alert Ticker</BlockTitle>
      <div className="list accordion-list">
        <ul>
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

          {tickerData &&
            tickerData.map((t) => (
              <AlertContainer
                showFeebackBtns={showFeebackBtns}
                bed={t.bed}
                alertType={t.alertType}
                distance={t.distance}
              ></AlertContainer>
            ))}
        </ul>
      </div>
    </Block>
  );
};

export default AlertTicker;
