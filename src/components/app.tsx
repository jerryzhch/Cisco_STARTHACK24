import React from 'react';
import { getDevice } from 'framework7/lite-bundle';
import { f7, f7ready, App, View } from 'framework7-react';

import capacitorApp from '../js/capacitor-app.js';
import routes from '../js/routes.ts';
import store from '../js/store.js';

const MyApp = () => {
  const device = getDevice();
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
  const viewInit = (view: View.View) => {
    const url = new URL(window.location.href);
    if (url.pathname.toLocaleLowerCase() !== '/') {
      view.router.navigate(url.pathname);
    }
  };

  return (
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
  );
};
export default MyApp;
