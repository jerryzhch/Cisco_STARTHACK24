import React from 'react';
import { Page, Navbar, NavLeft, NavTitle, NavRight, Block, BlockTitle } from 'framework7-react';
import AlertContainer from '../components/alert-container/alert-container.component.tsx';

const NursePage = () => (
  <Page name="nurse">
    {/* Top Navbar */}
    <Navbar>
      <NavLeft></NavLeft>
      <NavTitle>cisGO!</NavTitle>
      <NavRight></NavRight>
    </Navbar>
    <Block inset>
      <BlockTitle>Alert Ticker</BlockTitle>
      <div className="list accordion-list">
        <ul>
          <AlertContainer bed={'1:2'} alertType={'01_nurse'} distance={'20 m'}></AlertContainer>
          <AlertContainer bed={'1:3'} alertType={'03_pain'} distance={'20 m'}></AlertContainer>
        </ul>
      </div>
    </Block>
  </Page>
);
export default NursePage;
