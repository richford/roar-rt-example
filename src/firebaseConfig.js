/* eslint-disable import/prefer-default-export */
import { initializeApp } from 'firebase/app';
import { getFirestore, doc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCX9WR-j9yv1giYeFsMpbjj2G3p7jNHxIU',
  authDomain: 'gse-yeatmanlab.firebaseapp.com',
  projectId: 'gse-yeatmanlab',
  storageBucket: 'gse-yeatmanlab.appspot.com',
  messagingSenderId: '292331000426',
  appId: '1:292331000426:web:91a04220991e3405737013',
  measurementId: 'G-0TBTMDS993',
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
export const rootDoc = doc(db, 'dev', 'example');
