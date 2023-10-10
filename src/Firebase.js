// import { useDispatch } from "react-redux";
// import { authActions } from "./store/auth";
// import { useNavigate } from "react-router-dom";
// import Store from "./pages/Store";
// import { initializeApp } from "firebase/app";
// import {
//   getAuth,
//   GoogleAuthProvider,
//   signInWithPopup,
//   signOut,
// } from "firebase/auth";
// import PrivateRoute from "./components/PrivateRoute";

// const firebaseConfig = {
//   apiKey: "AIzaSyBWb-CWQNHidITuj2cYDo9Jn8C1HYhNXtQ",
//   authDomain: "frontendproject-6c6fb.firebaseapp.com",
//   databaseURL: "https://frontendproject-6c6fb-default-rtdb.firebaseio.com",
//   projectId: "frontendproject-6c6fb",
//   storageBucket: "frontendproject-6c6fb.appspot.com",
//   messagingSenderId: "479347289495",
//   appId: "1:479347289495:web:a893d937664c03586aa8d2",
// };

// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);

// const provider = new GoogleAuthProvider();

// export const signInWithGoogle = () => {
//   signInWithPopup(auth, provider)
//     .then((result) => {
//       const name = result.user.displayName;
//       const email = result.user.email;
//       const profilePic = result.user.photoURL;

//       localStorage.setItem("name", name);
//       localStorage.setItem("email", email);
//       localStorage.setItem("profilePic", profilePic);
//       //   dispatch(authActions.login());
//       //   navigate("/");
//       //   <PrivateRoute status={"pass"} />;
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

// export const signOutHandler = () => {
//   signOut(auth)
//     .then(() => {
//       // Sign-out successful.
//     })
//     .catch((error) => {
//       // An error happened.
//     });
// };
