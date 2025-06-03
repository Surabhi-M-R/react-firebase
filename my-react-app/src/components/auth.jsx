import { useState, useEffect } from 'react';
import { auth } from '../config/firebase';
import { 
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider
} from 'firebase/auth';

export const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return unsubscribe;
    }, []);

    const signIn = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            alert("Signed in successfully!");
        } catch (error) {
            console.error("Error signing in:", error);
            alert(error.message);
        }
    };
    
    const signInWithGoogle = async () => {
        try {
            const provider = new GoogleAuthProvider();
            await signInWithPopup(auth, provider);
            alert("Signed in with Google successfully!");
        } catch (error) {
            console.error("Error signing in with Google:", error);
            alert(error.message);
        }
    };
    
    const logout = async () => {
        try {
            await signOut(auth);
            alert("Logged out successfully!");
        } catch (error) {
            console.error("Error logging out:", error);
            alert(error.message);
        }
    };

    return (
        <div>
            {user ? (
                <div>
                    <p>Welcome, {user.email}</p>
                    <button onClick={logout}>Log out</button>
                </div>
            ) : (
                <div>
                    <input 
                        placeholder="Email..." 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} 
                    /> 
                    <input 
                        placeholder="Password..."
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} 
                    /> 
                    <button onClick={signIn}>Sign In</button>
                    <button onClick={signInWithGoogle}>Sign In With Google</button>
                </div>
            )}
        </div>
    );
};