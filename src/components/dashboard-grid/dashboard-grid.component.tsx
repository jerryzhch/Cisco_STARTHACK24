import { BlockTitle, Block } from 'framework7-react';
import React, { useContext, useEffect, useState } from 'react';
import AlertTicker from '../alert-container/alert-ticker.component.tsx';
import './dashboard-grid.style.less';
import Room from './room.component.tsx';
import { FB_DATABASE } from '../app.tsx';
import { onValue, ref } from '@firebase/database';

const DashboardGrid = () => {
  const db = useContext(FB_DATABASE);
  const [nursePositions, setNursePositions] = useState(undefined);
  const [bedPositions, setBedPositions] = useState(undefined);
  const [timestamp, setTimestamp] = useState(new Date().toLocaleDateString());
  const bedRef = ref(db, '/beds')
  const nursesRef = ref(db, '/nurses');

  useEffect(() => {
    const unsubscribe = onValue(bedRef, (snapshot) => {
      setBedPositions(snapshot.val());
      setTimestamp(new Date().toLocaleString());
    });
    return () => unsubscribe();
  }, [bedPositions]);
  

  useEffect(() => {
    const unsubscribe = onValue(nursesRef, (snapshot) => {
      setNursePositions(snapshot.val());
      setTimestamp(new Date().toLocaleString());
    });
    return () => unsubscribe();
  }, [nursePositions]);

  return (
    <div className="dashboard-grid">
      <div className="dashboard-grid-left" style={{}}>
        <BlockTitle>Station Overview // Last update: {timestamp}</BlockTitle>
        <Block inset>
          <div style={{ display: 'grid', gap: '80px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div className="grid-3">
                <Room name="Room 101"></Room>
                <Room name="Room 102"></Room>
                <Room name="Room 103"></Room>
              </div>
              <div className="grid-2">
                <Room name="Room 104"></Room>
                <Room name="Room 105"></Room>
              </div>
            </div>
            <div className="grid-3 spread">
              <Room name="Room 201"></Room>
              <Room name="Room 202"></Room>
              <Room name="Room 203"></Room>
            </div>
          </div>
          {nursePositions &&
            Object.keys(nursePositions).map((k) => (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'absolute',
                  color: nursePositions[k].available ? 'green' : 'red',
                  top: `${nursePositions[k].yPos}px`,
                  left: `${nursePositions[k].xPos}px`,
                  fontWeight: 'bold',
                  width: '40px',
                  height: '40px',
                }}
              >
                <img key={k} src={'../../public/pictograms/nurse.png'} alt="nurse" />
                <p style={{ margin: 0 }}>{k}</p>
              </div>
            ))}
           {bedPositions && 
            Object.keys(bedPositions).map((b) => (
            <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'absolute',
                  top: `${bedPositions[b].yPos}px`,
                  left: `${bedPositions[b].xPos}px`,
                  fontWeight: 'bold',
                  width: '40px',
                  height: '40px',
                }}
              >
                <img key={b} src={'../../public/pictograms/19_bed.png'} alt="bed" />
                <p style={{ margin: 0 }}>{b}</p>
              </div> ))}
        </Block>
      </div>
      <div className="dashboard-grid-right">
        <AlertTicker showFeebackBtns={false}></AlertTicker>
      </div>
    </div>
  );
};

export default DashboardGrid;
