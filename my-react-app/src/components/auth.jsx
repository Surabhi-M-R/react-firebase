
import { useState } from 'react';  // Fixed: Import useState (not userState)
import { auth } from '../config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export const Auth = () => {
    const [email, setEmail] = useState("");  // Fixed: useState
    const [password, setPassword] = useState("");  // Fixed: useState
    
    const signIn = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            alert("User created successfully!");
        } catch (error) {
            console.error("Error creating user:", error);
            alert(error.message);
        }
    };

    return (
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
        </div>
    );
};