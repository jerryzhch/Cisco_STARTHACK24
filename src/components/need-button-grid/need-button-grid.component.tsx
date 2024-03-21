import React from 'react';
import { Block } from 'framework7-react';
import NeedButton from '../need-button/need-button.component.js';
import './need-button-grid.style.less';

const NeedButtonGrid = () => (
  <div className="need-button-grid">
    <NeedButton type="pain"></NeedButton>
    <NeedButton type="nursing"></NeedButton>
    <NeedButton type="support"></NeedButton>
    <NeedButton type="pain"></NeedButton>
    <NeedButton type="nursing"></NeedButton>
    <NeedButton type="support"></NeedButton>
  </div>
);

export default NeedButtonGrid;
