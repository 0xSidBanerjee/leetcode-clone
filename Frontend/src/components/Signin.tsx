import { getAuth, sendSignInLinkToEmail } from "firebase/auth";
import { useState } from "react";

const actionCodeSettings = {
  url: 'http://localhost:5173/',
  handleCodeInApp: true
};
const auth=getAuth();

export const Signin = () =>{
    const [email, setEmail]=useState("");

   const onSignIn = async () => {
    try {
      await sendSignInLinkToEmail(auth, email, actionCodeSettings);
      window.localStorage.setItem('emailForSignIn', email);
      alert("Email sent. Check your inbox for the sign-in link.");
      console.log(email);
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Email not sent. Please try again.");
    }
  };
    return <div>
        <input type="text" placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)}/>
        <button onClick={()=>{
            onSignIn();
        }}>
            Sign in
        </button>
    </div>
}
