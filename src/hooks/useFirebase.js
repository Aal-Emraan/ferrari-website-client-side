import {GoogleAuthProvider, getAuth,signInWithEmailAndPassword , createUserWithEmailAndPassword, signInWithPopup, onAuthStateChanged, updateProfile, signOut  } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {

    // --------- All states here ----------
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [isAdmin, setIsAdmin] = useState(false);
    //-------------------------------------

    // -------------- Login with email and password -----------
    const login = (email, password, history, location) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            // const user = result.user;
            // setUser(result.user);
            let redirect_uri = location?.state?.from || '/';
            console.log(isAdmin);
            if(isAdmin){
                console.log(isAdmin);
                redirect_uri = '/dashboard';
            }
            history.push(redirect_uri);
        })
        .catch(error => {
            setError(error.message);
        })
        .finally(()=>setIsLoading(false))
    };
    //---------------------------- * --------------------------

    // ------- All sign up here ----------

    const auth = getAuth();

    // email password sign in

    const emailAndPasswordSignIn = (email, password, name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            updateProfile(auth.currentUser, {
                displayName: name
            })
            console.log(result.user);
            fetch('https://safe-scrubland-04558.herokuapp.com/user', {
                method: 'POST',
                headers: {
                  'content-type':'application/json'
                },
                body: JSON.stringify({displayName:name, email})
              })
            history.replace('/');
        })
        .catch(error => {
            setError(error.message);
        })
        .finally(() => setIsLoading(false))
    };

    // google sign in

    const signInWithGoogle = (history, location) => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
        .then(result => {
            fetch('https://safe-scrubland-04558.herokuapp.com/user', {
                method: 'POST',
                headers: {
                  'content-type':'application/json'
                },
                body: JSON.stringify({displayName: result.user.displayName, email: result.user.email})
              })
              .then(res => {
                const redirect_uri = location?.state?.from || '/';
                history.replace(redirect_uri);
              })
            // const redirect_uri = location.state.from || '/';
            // history.replace(redirect_uri);
        })
        .catch(error => {
            setError(error.message);
        })
    };

    // -------------- * --------------

    // ---------- sign out ---------

    const logout = () => {
        setIsLoading(true);
        signOut(auth)
        .then(() => {

        })
        .catch(error => {
            setError(error.message);
        })
        .finally(() => setIsLoading(false))
    };
    // --------------- * ---------------

    // ------------ track user changes -------
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if(user){
                setUser(user);
                setIsLoading(false);
            }else{
                setUser({});
                // setIsLoading(true);
            }
            setIsLoading(false);
        })
    },[auth])

    // ---------------------------------------

    // -------------- check is admin or not -------------
    useEffect(() => {
        fetch(`https://safe-scrubland-04558.herokuapp.com/isadmin/${user?.email}`)
        .then(res => res.json())
        .then(result => setIsAdmin(result.isAdmin));
    },[user.email])

    return {
        user,
        error,
        isAdmin,
        isLoading,
        login,
        emailAndPasswordSignIn,
        signInWithGoogle,
        logout
    }
}

export default useFirebase;