const admin = require('firebase-admin');

// Initialize Firebase Admin SDK
const serviceAccount = require('path/to/serviceAccountKey.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

async function checkAuthProviders() {
    try {
      const providers = await admin.auth().listProviders();
      console.log('Supported authentication providers:', providers);
    } catch (error) {
      console.error('Error fetching authentication providers:', error);
    }
  }
  
  checkAuthProviders();
  