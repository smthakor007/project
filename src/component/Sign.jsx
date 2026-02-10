import { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { app } from "../Firebase";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export default function Sign() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const registerUser = async () => {
    if (!email || !password) {
      alert("Email aur Password dono bharo");
      return;
    }
 try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCredential.user);
      alert("Register Success ");
    } catch (error) {
      console.error(error.message);
      alert(error.message);
    }
  };

  const signupWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log(result.user);
      alert("Google Login Success ");
    } catch (error) {
      console.error(error.message);
      alert(error.message);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Register</h1>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br /><br />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br /><br />

      <button onClick={registerUser}>Register</button>
      <br /><br />

      <button onClick={signupWithGoogle}>Sign in with Google</button>
    </div>
  );
}
