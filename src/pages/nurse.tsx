import React, { useContext } from 'react';
import { Page, Navbar, NavLeft, NavTitle, NavRight } from 'framework7-react';
import AlertTicker from '../components/alert-container/alert-ticker.component.tsx';
import { FB_DATABASE } from '../firebase.ts';

const NursePage = () => {

  const db = useContext(FB_DATABASE);
  return (
    <Page name="nurse">
      {/* Top Navbar */}
      <Navbar>
        <NavLeft></NavLeft>
        <NavTitle>cisGO!</NavTitle>
        <NavRight></NavRight>
      </Navbar>
      <AlertTicker></AlertTicker>
    </Page>
  );
};
export default NursePage;
