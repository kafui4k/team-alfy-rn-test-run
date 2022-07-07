import * as firebase from 'firebase';
import '@firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyBs0YzRdTMVBWJKB0H04yl0d0xVQQJKJRw',
    authDomain: 'teamalfy-test-run.firebaseapp.com',
    projectId: 'teamalfy-test-run',
    storageBucket: 'teamalfy-test-run.appspot.com',
    messagingSenderId: '824739222374',
    appId: '1:824739222374:web:354db9dc3f46da46fc2ea7',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export {firebase};
