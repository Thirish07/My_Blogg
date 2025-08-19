// import { getAuth, GoogleAuthProvider } from 'firebase/auth'
// import { initializeApp } from "firebase/app";
// import { getEvn } from "./getEnv";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: getEvn('VITE_FIREBASE_API'),
//     authDomain: "yt-mern-blog.firebaseapp.com",
//     projectId: "yt-mern-blog",
//     storageBucket: "yt-mern-blog.firebasestorage.app",
//     messagingSenderId: "150248092393",
//     appId: "1:150248092393:web:34bc9843d732ee4be7f678"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// const auth = getAuth(app)
// const provider = new GoogleAuthProvider()

// export { auth, provider }
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { initializeApp } from "firebase/app";
import { getEvn } from "./getEnv";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCT1C_FBiUekx0qe78jRwTfGd1DBtD6ZQY",
  authDomain: "myblog-6f3fc.firebaseapp.com",
  projectId: "myblog-6f3fc",
  storageBucket: "myblog-6f3fc.appspot.com",
  messagingSenderId: "804544149012",
  appId: "1:804544149012:web:0b0a5142138b97b1b1d901",
  measurementId: "G-DEMELE91ZJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export { auth, provider }