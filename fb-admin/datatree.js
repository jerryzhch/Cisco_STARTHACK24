var admin = require('firebase-admin');

// Fetch the service account key JSON file contents
var serviceAccount = require('./starthack2024-firebase-adminsdk-jupxu-5a3edb365a.json');
// Initialize the app with a service account, granting admin privileges
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  // The database URL depends on the location of the database
  databaseURL: 'https://starthack2024-default-rtdb.europe-west1.firebasedatabase.app',
});
console.log('Program started');
// As an admin, the app has access to read and write all data, regardless of Security Rules
const db = admin.database();
const ref = db.ref('/alerts');
const nursesRef = db.ref('/nurses');
const bedsRef = db.ref('/beds');

const allNurses = {};
const allBeds = {};

// Function to calculate the distance between two points
function calculateDistance(x1, y1, x2, y2) {
  return Math.sqrt(Math.pow(Math.abs(y2 - y1), 2) + Math.pow(Math.abs(x2 - x1), 2));
}

// Function to choose the nearest nurse based on the provided x and y coordinates
function choose_nurse(x, y, alertLevel) {
  let minDistance = Infinity;
  let nearestNurse = null;
  let dist;

  Object.keys(allNurses)
    .filter((a) => allNurses[a].level >= alertLevel)
    .sort((a, b) => allNurses[a].level - allNurses[b].level)
    .map((nurseId) => {
      const nurse = allNurses[nurseId];
      const nurseX = nurse.xPos;
      const nurseY = nurse.yPos;
      dist = calculateDistance(x, y, nurseX, nurseY);

      // Check if the nurse is available
      if (dist < minDistance && nurse.available) {
        minDistance = dist;
        nearestNurse = nurseId;
      }
    });

  return [nearestNurse, dist];
}

nursesRef.on('child_added', (snapshot) => {
  allNurses[snapshot.key] = snapshot.val();
});
nursesRef.on('child_changed', (snapshot) => {
  allNurses[snapshot.key] = snapshot.val();
});

bedsRef.on('child_changed', (snapshot) => {
  allBeds[snapshot.key] = snapshot.val();
});
bedsRef.on('child_added', (snapshot) => {
  allBeds[snapshot.key] = snapshot.val();
});

nursesRef
  .once('value', (snapshot) => {
    snapshot.forEach((s) => {
      allNurses[s.key] = s.val();
    });
  })
  .then(() => {
    bedsRef
      .once('value', (snapshot) => {
        snapshot.forEach((s) => {
          allBeds[s.key] = s.val();
        });
      })
      .then(() => {
        // Listener for changes in alerts
        ref.on('child_added', function (snapshot) {
          const alert = snapshot.val();

          bed_found = allBeds[alert.bed];

          const [nearestNurse, dist] = choose_nurse(bed_found.xPos, bed_found.yPos, alert.level);

          if (nearestNurse) {
            console.log('Nearest nurse:', nearestNurse);

            // Assign alert to nearest nurse
            const nearestNurseRef = db.ref('/nurses/' + nearestNurse + '/alerts');
            alert['distance'] = dist;
            nearestNurseRef.update({ [snapshot.key]: alert });
            nearestNurseRef.parent.update({ available: false });
          } else {
            console.log('No available nurse found.');
          }
        });
      });
  });
//
