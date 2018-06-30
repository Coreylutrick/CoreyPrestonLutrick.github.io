const initializer = require('./events');
const firebase = require('./firebaseApi');

initializer.initializer();
firebase.retrieveKeys();
