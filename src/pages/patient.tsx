import React, { createContext } from 'react';
import { Page } from 'framework7-react';
import NeedButtonGrid from '../components/need-button-grid/need-button-grid.component.tsx';

export const BedContext = createContext('103:1');

const PatientPage = () => {
  return (
    <Page name="patient">
      {/* Top Navbar */}
      <NeedButtonGrid></NeedButtonGrid>
    </Page>
  );
};
export default PatientPage;
