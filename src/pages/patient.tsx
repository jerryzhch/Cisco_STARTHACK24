import React from 'react';
import { Page } from 'framework7-react';
import NeedButtonGrid from '../components/need-button-grid/need-button-grid.component.tsx';

const PatientPage = () => (
  <Page name="patient" style={{ overflow: 'hidden' }}>
    {/* Top Navbar */}
    <NeedButtonGrid></NeedButtonGrid>
  </Page>
);
export default PatientPage;
