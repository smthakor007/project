import { useState } from "react";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { app } from "../Firebase";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export default function Sign() {
  const [loading, setLoading] = useState(false);

  const signupWithGoogle = async () => {
    try {
      setLoading(true);

      const result = await signInWithPopup(auth, googleProvider);
      console.log(result.user);

      alert("Google Login Success");

    } catch (error) {
      console.error(error.message);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Sign In</h1>

      <button onClick={signupWithGoogle} disabled={loading}>
        {loading ? "Processing..." : "Sign in with Google"}
      </button>
    </div>
  );
}
