import React from 'react';
import { Block } from 'framework7-react';
import NeedButton from '../need-button/need-button.component.js';
import './need-button-grid.style.less';

const NeedButtonGrid = () => (
  <div className="need-button-grid">
    <NeedButton name="Essen"></NeedButton>
    <NeedButton name="Trinken"></NeedButton>
    <NeedButton name="Essen"></NeedButton>
    <NeedButton name="Trinken"></NeedButton>
    <NeedButton name="Essen"></NeedButton>
    <NeedButton name="Trinken"></NeedButton>
  </div>
);

export default NeedButtonGrid;
