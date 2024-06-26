import React, { useContext, useEffect, useState } from 'react';
import { Page, Navbar, NavLeft, NavTitle, NavRight } from 'framework7-react';
import AlertTicker from '../components/alert-container/alert-ticker.component.tsx';
import { ref, update, DatabaseReference } from 'firebase/database';
import { FB_AUTH, FB_DATABASE } from '../components/app.tsx';
import NurseChooser from '../components/nurse-chooser/nurse-chooser.component.tsx';

const NursePage = () => {
  const db = useContext(FB_DATABASE);
  const auth = useContext(FB_AUTH);
  const [currentNurse, setCurrentNurse] = useState(undefined);
  useEffect(() => {
    let presenceRef: DatabaseReference;
    auth.onAuthStateChanged((currentUser) => {
      if (currentUser && currentNurse) {
        presenceRef = ref(db, 'nurses/' + currentNurse.name);
      }
      return () => {
        presenceRef ? update(presenceRef, { available: true }) : undefined;
      };
    });
  }, [auth, currentNurse]);
  return (
    <Page name="nurse">
      {/* Top Navbar */}
      <Navbar>
        <NavLeft></NavLeft>
        <NavTitle>cisGO!</NavTitle>
        <NavRight>
          {currentNurse && 'Current: ' + currentNurse.name}
          <br /> {currentNurse && 'Profil: ' + currentNurse.level}
        </NavRight>
      </Navbar>
      <NurseChooser setNurse={setCurrentNurse}></NurseChooser>
      <AlertTicker currentNurse={currentNurse && currentNurse.name}></AlertTicker>
    </Page>
  );
};
export default NursePage;
