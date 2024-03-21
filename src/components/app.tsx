import React, { useContext } from 'react';
import { getDevice } from 'framework7/lite-bundle';
import { f7, f7ready, App, View } from 'framework7-react';

import capacitorApp from '../js/capacitor-app.js';
import routes from '../js/routes.ts';
import store from '../js/store.js';
import { signInAnonymously } from 'firebase/auth';
import { createContext } from 'react';
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDpzUQDSA19lso0lm4sKWPjZ1R78W21VlY',
  authDomain: 'starthack2024.firebaseapp.com',
  databaseURL: 'https://starthack2024-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'starthack2024',
  storageBucket: 'starthack2024.appspot.com',
  messagingSenderId: '283438281266',
  appId: '1:283438281266:web:2fbb1be2e0786a5b07822b',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth();

export const FB_DATABASE = createContext(db);
export const FB_AUTH = createContext(auth);

const MyApp = () => {
  const device = getDevice();
  const auth = useContext(FB_AUTH);
  const db = useContext(FB_DATABASE);
  // Framework7 Parameters
  const f7params = {
    name: 'cisGO!', // App name
    theme: 'md', // Automatic theme detection
    colors: {
      primary: '#2fc4b2',
    },

    // App store
    store: store,
    // App routes
    routes: routes,

    // Input settings
    input: {
      scrollIntoViewOnFocus: device.capacitor,
      scrollIntoViewCentered: device.capacitor,
    },
    // Capacitor Statusbar settings
    statusbar: {
      iosOverlaysWebView: true,
      androidOverlaysWebView: false,
    },
  };
  f7ready(() => {
    // Init capacitor APIs (see capacitor-app.js)
    if (f7.device.capacitor) {
      capacitorApp.init(f7);
    }
    // Call F7 APIs here
  });

  signInAnonymously(auth)
    .then(() => console.log('hsvho'))
    .catch((error) => {
      console.log(error);
      const errorCode = error.code;
      const errorMessage = error.message;
      // ...
    });
  const viewInit = (view: View.View) => {
    // Signed in..
    const url = new URL(window.location.href);
    if (url.pathname.toLocaleLowerCase() !== '/') {
      view.router.navigate(url.pathname);
    }
  };

  return (
    <FB_AUTH.Provider value={auth}>
      <FB_DATABASE.Provider value={db}>
        <App {...f7params}>
          {/* Left panel with cover effect*/}

          {/* Your main view, should have "view-main" class */}
          <View
            main
            className="safe-areas"
            url="/"
            id="view-home"
            browserHistory={true}
            browserHistorySeparator=""
            onViewInit={viewInit}
          />
        </App>
      </FB_DATABASE.Provider>
    </FB_AUTH.Provider>
  );
};
export default MyApp;
