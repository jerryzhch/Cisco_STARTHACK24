import React from 'react';
import NeedButton from '../need-button/need-button.component.js';
import './need-button-grid.style.less';

const NeedButtonGrid = ({ config }) => {
  console.log(config);
  switch (config) {
    case 'simple':
      return (
        <div className="need-button-grid-simple">
          <NeedButton type="pain"></NeedButton>
          <NeedButton type="nursing"></NeedButton>
        </div>
      );
      break;
    case 'regular':
      return (
        <div className="need-button-grid-regular">
          <NeedButton type="pain"></NeedButton>
          <NeedButton type="nursing"></NeedButton>
          <NeedButton type="support"></NeedButton>
          <NeedButton type="drink"></NeedButton>
          <NeedButton type="cold"></NeedButton>
          <NeedButton type="infusion"></NeedButton>
        </div>
      );
      break;
    case 'advanced':
      return (
        <div className="need-button-grid-advanced">
          <NeedButton type="pain"></NeedButton>
          <NeedButton type="nursing"></NeedButton>
          <NeedButton type="nursing"></NeedButton>
          <NeedButton type="support"></NeedButton>
          <NeedButton type="walk"></NeedButton>
          <NeedButton type="media"></NeedButton>
          <NeedButton type="support"></NeedButton>
          <NeedButton type="drink"></NeedButton>
          <NeedButton type="getup"></NeedButton>
          <NeedButton type="bed"></NeedButton>
        </div>
      );
    default:
      break;
  }
};
export default NeedButtonGrid;
