var admin = require("firebase-admin")

var serviceAccount = require("C:/Users/Hp/OneDrive/Documents/tutoriad_backend/util/tutor-iad-firebase-adminsdk-bsjrw-1e997ae4a5.json")

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://tutor-iad-default-rtdb.firebaseio.com"
});

const db = admin.firestore();
module.exports = { admin, db };
