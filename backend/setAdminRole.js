const admin = require('firebase-admin');
const serviceAccount = require('/Users/joelee/Downloads/kanavoogle-23e39-firebase-adminsdk-k9eqr-a09af8cd5a.json'); // Add your Firebase service account key

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const setAdminRole = async (uid) => {
  try {
    await admin.auth().setCustomUserClaims(uid, { admin: true });
    console.log(`Successfully set admin role for user: ${uid}`);
  } catch (error) {
    console.error('Error setting admin role:', error);
  }
};

// Replace this with the UID of the user you want to make an admin
const uid = 'RvuDWWTpzJhr8T86xAiKRl37ZUN2';
setAdminRole(uid);
