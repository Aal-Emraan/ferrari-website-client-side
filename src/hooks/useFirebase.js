import {GoogleAuthProvider, getAuth,signInWithEmailAndPassword , createUserWithEmailAndPassword, signInWithPopup, onAuthStateChanged, signOut  } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {

    // --------- All states here ----------
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    //-------------------------------------


    // ----------- get all cars ----------


    // ------------- * -------------------

    // -------------- Login with email and password -----------
    const login = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            const user = result.user;
        })
        .catch(error => {
            setError(error.message);
        })
    };
    //---------------------------- * --------------------------

    // ------- All sign up here ----------

    const auth = getAuth();

    // email password sign in

    const emailAndPasswordSignIn = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {

        })
        .catch(error => {
            setError(error.message);
        })
    };

    // google sign in

    const signInWithGoogle = (history, location) => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
        .then(result => {
            const redirect_uri = location.state.from || '/';
            history.replace(redirect_uri);
        })
        .catch(error => {
            setError(error.message);
        })
    };

    // -------------- * --------------

    // ---------- sign out ---------

    const logout = () => {
        signOut(auth)
        .then(() => {

        })
        .catch(error => {
            setError(error.message);
        })
    };
    // --------------- * ---------------

    // ------------ track user changes -------
    useEffect(() => {
        setIsLoading(true);
        onAuthStateChanged(auth, user => {
            if(user){
                setUser(user);
                setIsLoading(false)
            }else{
                setUser({});
                setIsLoading(true);
            }
        })
    },[auth])

    return {
        user,
        error,
        isLoading,
        login,
        emailAndPasswordSignIn,
        signInWithGoogle,
        logout
    }
}

export default useFirebase;