import * as firebase from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDhydiCYYwelGcHfVz08MqCmmOPzQld0vI",
    authDomain: "acuario-herapp.firebaseapp.com",
    projectId: "acuario-herapp",
    storageBucket: "acuario-herapp.appspot.com",
    messagingSenderId: "661407174114",
    appId: "1:661407174114:web:948345d74f1c302b48bdbb"
};
const app = firebase.initializeApp(firebaseConfig);

 export const getFirebase = ()=>{
    return app
};

export const db = getFirestore(app)