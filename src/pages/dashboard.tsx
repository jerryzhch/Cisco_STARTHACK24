import React from 'react';
import { Page, Navbar, NavLeft, NavTitle, NavRight } from 'framework7-react';

const DashboardPage = () => (
  <Page name="dashboard">
    {/* Top Navbar */}
    <Navbar>
      <NavLeft></NavLeft>
      <NavTitle>cisGO!</NavTitle>
      <NavRight></NavRight>
    </Navbar>
  </Page>
);
export default DashboardPage;
