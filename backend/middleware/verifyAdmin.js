const admin = require('firebase-admin');
const serviceAccount = require('/Users/joelee/Downloads/kanavoogle-23e39-firebase-adminsdk-k9eqr-a09af8cd5a.json'); // Add your Firebase service account key

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// Middleware to verify Firebase token and check for admin role
const verifyAdmin = async (req, res, next) => {
  const idToken = req.headers.authorization?.split(' ')[1]; // Extract the token from Authorization header

  if (!idToken) {
    return res.status(401).send('Unauthorized');
  }

  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    if (decodedToken.admin) {
      next(); // User is an admin, allow the request to proceed
    } else {
      res.status(403).send('Forbidden: Admins only');
    }
  } catch (error) {
    res.status(403).send('Forbidden');
  }
};

module.exports = verifyAdmin;
