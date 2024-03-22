import React from 'react';
import { Page, Navbar, NavLeft, NavTitle, NavRight } from 'framework7-react';
import DashboardGrid from '../components/dashboard-grid/dashboard-grid.component.tsx';

const DashboardPage = () => (
  <Page name="dashboard">
    {/* Top Navbar */}
    <Navbar>
      <NavLeft></NavLeft>
      <NavTitle>cisGO!</NavTitle>
      <NavRight>Dashboard</NavRight>
    </Navbar>
    <DashboardGrid></DashboardGrid>
  </Page>
);
export default DashboardPage;
