import './App.css'
import { Landing } from './components/Landing'


import { initializeApp } from "firebase/app";
import { Signin } from './components/Signin';
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyBbQvabPDgxp9dHBGkok8SM-DMM8f7NZN0",
  authDomain: "leetcode-clone-182df.firebaseapp.com",
  projectId: "leetcode-clone-182df",
  storageBucket: "leetcode-clone-182df.appspot.com",
  messagingSenderId: "935210605487",
  appId: "1:935210605487:web:9f1dc25b9bca82ac072d5a",
  measurementId: "G-1TXPYCK3BY"
};

const app = initializeApp(firebaseConfig);

function App() {

  return (
    <>
    <div className="text-3xl">
      <Signin/>
    </div>
    </>
  )
}

export default App
