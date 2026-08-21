import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCCoC3KCO7jNWPel45tW6Ov8-Ja6g5obTQ",
  authDomain: "jetshoot-e40df.firebaseapp.com",
  projectId: "jetshoot-e40df",
  storageBucket: "jetshoot-e40df.firebasestorage.app",
  messagingSenderId: "139535648736",
  appId: "1:139535648736:web:16428b344d123c4a0a4d85",
  measurementId: "G-HVQX7E4E7D"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);