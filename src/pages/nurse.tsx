import React, { useContext, useEffect } from 'react';
import { Page, Navbar, NavLeft, NavTitle, NavRight } from 'framework7-react';
import AlertTicker from '../components/alert-container/alert-ticker.component.tsx';
import { ref, onDisconnect, update } from 'firebase/database';
import { FB_AUTH, FB_DATABASE } from '../components/app.tsx';

const NursePage = () => {
  const db = useContext(FB_DATABASE);
  const auth = useContext(FB_AUTH);
  useEffect(() => {
    if (auth.currentUser) {
      const presenceRef = ref(db, 'nurses/' + auth.currentUser?.uid);

      update(presenceRef, { available: true, test: 'test' });
      onDisconnect(presenceRef).update({ available: false });
    }
  }, [auth]);
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
