import { BlockTitle, Block } from 'framework7-react';
import React from 'react';
import AlertTicker from '../alert-container/alert-ticker.component.tsx';
import './dashboard-grid.style.less';

const DashboardGrid = () => {
  return (
    <div className="dashboard-grid">
      <div className="dashboard-grid-left">
        <BlockTitle>Station Overview</BlockTitle>
        <Block inset></Block>
      </div>
      <div className="dashboard-grid-right">
        <AlertTicker showFeebackBtns={false}></AlertTicker>
      </div>
    </div>
  );
};

export default DashboardGrid;
