var admin = require("firebase-admin");

// Fetch the service account key JSON file contents
var serviceAccount = require( "./starthack2024-firebase-adminsdk-jupxu-5a3edb365a.json");
// Initialize the app with a service account, granting admin privileges
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  // The database URL depends on the location of the database
  databaseURL: "https://starthack2024-default-rtdb.europe-west1.firebasedatabase.app"
});
console.log("Program started")
// As an admin, the app has access to read and write all data, regardless of Security Rules
const db = admin.database();
const ref = db.ref("/alerts");
const nursesRef = db.ref("/nurses")
const bedsRef = db.ref("/beds")

const distance = {}
const allNurses = {}
const allBeds = {}

// Function to calculate the distance between two points
function calculateDistance(x1, y1, x2, y2) {
  return Math.sqrt(Math.pow(Math.abs(y2 - y1), 2) + Math.pow(Math.abs(x2 - x1), 2));
}

// Function to choose the nearest nurse based on the provided x and y coordinates
function choose_nurse(x, y) {
  let minDistance = Infinity;
  let nearestNurse = null;

  for (const nurseId in allNurses) {
      const nurse = allNurses[nurseId];
      const nurseX = nurse.xPos;
      const nurseY = nurse.yPos;
      const dist = calculateDistance(x, y, nurseX, nurseY);

      if (dist < minDistance && nurse.available) {
          minDistance = dist;
          nearestNurse = nurseId;
      }
  }

  return nearestNurse;
}

nursesRef.on("child_added", (snapshot) => {
  allNurses[snapshot.key] = snapshot.val()
})

bedsRef.on("child_changed", (snapshot) => {
  allBeds[snapshot.key] = snapshot.val()
})
bedsRef.on("child_added", (snapshot) => {
  allBeds[snapshot.key] = snapshot.val()
})
nursesRef.on("child_changed", (snapshot) => {
  allNurses[snapshot.key] = snapshot.val()
})


//
// Listener for changes in alerts
ref.on("child_added", function(snapshot) {
  const alert = snapshot.val();

  bed_found = allBeds[alert.bed]

  const nearestNurse = choose_nurse(bed_found.xPos, bed_found.yPos);
  
  if (nearestNurse) {
      console.log("Nearest nurse:", nearestNurse);
      // Perform actions with the nearest nurse
      // For example, you can update the nurse's availability status or assign tasks.
  } else {
      console.log("No available nurse found.");
  }
});
//

