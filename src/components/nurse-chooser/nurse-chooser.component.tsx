import { get, ref } from 'firebase/database';
import React, { useContext, useEffect, useState } from 'react';
import { FB_DATABASE } from '../app.tsx';

const NurseChooser = ({ setNurse }) => {
  const db = useContext(FB_DATABASE);
  const [nursesList, setNursesList] = useState<string[]>([]);
  const nurseRef = ref(db, '/nurses');
  useEffect(() => {
    get(nurseRef).then((snapshot) => {
      setNursesList(Object.keys(snapshot.val()));
    });
  });

  return (
    <>
      <div className="fab fab-right-bottom fab-morph" data-morph-to=".demo-fab-sheet.fab-morph-target">
        <a>
          <i className="icon f7-icons if-not-md">person_2_alt</i>
          <i className="icon material-icons md-only">person_2_alt</i>
        </a>
      </div>
      <div className="list links-list demo-fab-sheet fab-morph-target">
        <ul>
          {nursesList &&
            nursesList.map((n) => (
              <li key={n} onClick={() => setNurse(n)}>
                <a className="fab-close">{n}</a>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default NurseChooser;
