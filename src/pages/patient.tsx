import React, { createContext } from 'react';
import { Navbar, Page } from 'framework7-react';
import NeedButtonGrid from '../components/need-button-grid/need-button-grid.component.tsx';

export const BedContext = createContext('103:1');

const PatientPage = () => {
  return (
    <Page name="patient">
      {/* Top Navbar */}
      <swiper-container pagination class="demo-swiper-multiple" space-between="50">
        <swiper-slide>
          <NeedButtonGrid config="simple"></NeedButtonGrid>
        </swiper-slide>
        <swiper-slide>
          <NeedButtonGrid config="regular"></NeedButtonGrid>
        </swiper-slide>
        <swiper-slide>
          <NeedButtonGrid config="advanced"></NeedButtonGrid>
        </swiper-slide>
      </swiper-container>
    </Page>
  );
};
export default PatientPage;
