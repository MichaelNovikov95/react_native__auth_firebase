import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import { auth } from "../../firebase/config";
import { authSlice } from "./authReducer";

const authSignUpUser =
  ({ email, password, name }) =>
  (dispatch, getState) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(auth.currentUser, {
          displayName: name,
        }).then(() => {
          dispatch(authSlice.actions.errorHandler({ error: null }));
          dispatch(
            authSlice.actions.updateUserProfile({
              userId: user.uid,
              userName: user.displayName,
            })
          );
        });
      })
      .catch((error) => {
        dispatch(authSlice.actions.errorHandler({ error: error.message }));
        console.log(error.message);
      });
  };

const authSignInUser =
  ({ email, password }) =>
  (dispatch, getState) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        dispatch(authSlice.actions.errorHandler({ error: null }));
      })
      .catch((error) => {
        dispatch(authSlice.actions.errorHandler({ error: error.message }));
        console.log(error.message);
      });
  };

const authSignOutUser = () => (dispatch, getState) => {
  signOut(auth).then(() => {
    dispatch(authSlice.actions.signOut());
  });
};

const authStateChangeUser = () => (dispatch, getState) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      dispatch(
        authSlice.actions.updateUserProfile({
          userId: user.uid,
          userName: user.displayName,
          error: null,
        })
      );
      dispatch(authSlice.actions.authStateChange({ stateChange: true }));
    }
  });
};

export { authSignUpUser, authSignInUser, authSignOutUser, authStateChangeUser };
