import React from 'react';
import { Page, Navbar, NavLeft, NavTitle, NavRight, Link } from 'framework7-react';

const HomePage = () => (
  <Page name="home">
    {/* Top Navbar */}
    <Navbar>
      <NavLeft></NavLeft>
      <NavTitle>cisGO!</NavTitle>
      <NavRight></NavRight>
    </Navbar>
    <Link href="/patient/">Patient</Link>
    <br />
    <Link href="/nurse/">nurse</Link>
    <br />
    <Link href="/dashboard/">dashboard</Link>
  </Page>
);
export default HomePage;
