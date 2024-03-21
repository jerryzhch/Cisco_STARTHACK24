import { BlockTitle, Block } from 'framework7-react';
import React from 'react';
import AlertTicker from '../alert-container/alert-ticker.component.tsx';
import './dashboard-grid.style.less';
import positions from './positions.json';
import nurseImage from './nurse.png';


const DashboardGrid = () => {
  return (
    <div className="dashboard-grid">
      <div className="dashboard-grid-left">
        <BlockTitle>Station Overview</BlockTitle>
        <Block inset style={{ position: 'relative' }}>
          <div className="room" style={{ position: 'absolute', top: '50px', left: '50px', width: '150px', height: '150px', background: 'lightgreen', border: '2px solid black' }}>
            <div className="room-label">Room 1.1</div>
          </div>
          <div className="room" style={{ position: 'absolute', top: '50px', left: '250px', width: '150px', height: '150px', background: 'lightgreen', border: '2px solid black' }}>
            <div className="room-label">Room 1.2</div>
            <img className="alert-icon" src={`../assets/pictograms/01_nurse.png`} />
          </div>
          <div className="room" style={{ position: 'absolute', top: '50px', left: '450px', width: '150px', height: '150px', background: 'lightgreen', border: '2px solid black' }}>
            <div className="room-label">Room 1.3</div>
            <img className="alert-icon" src={`../assets/pictograms/03_pain.png`} />
          </div>
          <div className="room" style={{ position: 'absolute', top: '50px', left: '650px', width: '150px', height: '150px', background: 'lightgreen', border: '2px solid black' }}>
            <div className="room-label">Room 1.4</div>
          </div>
          <div className="room" style={{ position: 'absolute', top: '50px', left: '850px', width: '150px', height: '150px', background: 'lightgreen', border: '2px solid black' }}>
            <div className="room-label">Room 1.5</div>
          </div>
          
          <div className="room" style={{ position: 'absolute', top: '300px', left: '150px', width: '200px', height: '150px', background: 'lightgreen', border: '2px solid black' }}>
            <div className="room-label">Room 2.1</div>
          </div>
          <div className="room" style={{ position: 'absolute', top: '300px', left: '400px', width: '200px', height: '150px', background: 'lightgreen', border: '2px solid black' }}>
            <div className="room-label">Room 2.2</div>
          </div>
          <div className="room" style={{ position: 'absolute', top: '300px', left: '650px', width: '200px', height: '150px', background: 'lightgreen', border: '2px solid black' }}>
            <div className="room-label">Room 2.3</div>
          </div>

        <React.Fragment>
          {positions.map((position, index) => (
            <img 
              key={index}
              src={nurseImage}
              alt='nurse'
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
