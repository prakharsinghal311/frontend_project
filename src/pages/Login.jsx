import classes from "./Login.module.css";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth";
import { signInWithGoogle, signOutHandler } from "../Firebase";
import { auth, provider } from "../config";
import { signInWithPopup, FacebookAuthProvider } from "firebase/auth";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const [isLogin, setIsLogin] = useState(true);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBWb-CWQNHidITuj2cYDo9Jn8C1HYhNXtQ";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBWb-CWQNHidITuj2cYDo9Jn8C1HYhNXtQ";
    }

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          localStorage.setItem("email", enteredEmail);
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentication failed!";
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        dispatch(authActions.login());
        navigate("/");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const googleSignInHandler = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const name = result.user.displayName;
        const email = result.user.email;
        const profilePic = result.user.photoURL;

        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("profilePic", profilePic);
        //   dispatch(authActions.login());
        //   navigate("/");
        //   <PrivateRoute status={"pass"} />;
        dispatch(authActions.login());
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const facebookSignInHandler = () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const name = result.user.displayName;
        const email = result.user.email;
        const profilePic = result.user.photoURL;

        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("profilePic", profilePic);
        //   dispatch(authActions.login());
        //   navigate("/");
        //   <PrivateRoute status={"pass"} />;
        dispatch(authActions.login());
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section className={classes.auth}>
      <h1>Login</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.actions}>
          <button>{isLogin ? "Login" : "create Account"}</button>
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "login with existing account"}
          </button>
        </div>
      </form>
      <div className={classes.actions}>
        <button onClick={googleSignInHandler}>Sign in with Google</button>
      </div>
      <div className={classes.actions}>
        <button onClick={facebookSignInHandler}>Sign in with Facebook</button>
      </div>
      {/* <div className={classes.actions}>
        <button onClick={signOutHandler}>Sign Out</button>
      </div> */}
    </section>
  );
};

export default Login;
