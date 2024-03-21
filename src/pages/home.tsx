import React from 'react';
import { Page, Navbar, NavLeft, NavTitle, NavRight, Button, Block } from 'framework7-react';

const HomePage = () => (
  <Page name="home">
    {/* Top Navbar */}
    <Navbar>
      <NavLeft></NavLeft>
      <NavTitle>cisGO!</NavTitle>
      <NavRight></NavRight>
    </Navbar>
    <Block inset>
      <div className="grid grid-cols-3 grid-gap">
        <Button large fill href="/patient/">
          Patient
        </Button>
        <Button large fill href="/nurse/">
          Nurse
        </Button>
        <Button large fill href="/dashboard/">
          Dashboard
        </Button>
      </div>
    </Block>
  </Page>
);
export default HomePage;
