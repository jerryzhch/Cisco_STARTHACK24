import { Block, BlockTitle } from 'framework7-react';
import React from 'react';
import AlertContainer from './alert-container.component.tsx';

const AlertTicker = ({ showFeebackBtns = true }) => {
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
        </ul>
      </div>
    </Block>
  );
};

export default AlertTicker;
