import { BlockTitle, Block } from 'framework7-react';
import React from 'react';
import AlertTicker from '../alert-container/alert-ticker.component.tsx';
import './dashboard-grid.style.less';
import positions from './positions.json';
import Room from './room.component.tsx';

const DashboardGrid = () => {
  return (
    <div className="dashboard-grid">
      <div className="dashboard-grid-left">
        <BlockTitle>Station Overview</BlockTitle>
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

          <React.Fragment>
            {positions.map((position, index) => (
              <img
                key={index}
                src={'../../assets/pictograms/nurse.png'}
                alt="nurse"
                style={{
                  position: 'absolute',
                  top: `${position.y}px`,
                  left: `${position.x}px`,
                  width: '40px',
                  height: '40px',
                }}
              />
            ))}
          </React.Fragment>
        </Block>
      </div>
      <div className="dashboard-grid-right">
        <AlertTicker showFeebackBtns={false}></AlertTicker>
      </div>
    </div>
  );
};

export default DashboardGrid;
