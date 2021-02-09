import React, { useState } from "react";
import Styles from "./Css/Login.module.css";
import Cancel from "../icons/error.svg";
import { get_users, log_out } from "../Redux/Actioncreator";
import { useDispatch, useSelector } from "react-redux";
function Login() {
  const [login_visibility, setvisibility] = useState("none");
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const dispath = useDispatch();
  const user = useSelector((state) => state.login.user);
  const error = useSelector((state) => state.login.login_error);
  const loading = useSelector((state) => state.login.login_Loading);
  const data = { username: username, password: password };
  const handle_login = (e) => {
    e.preventDefault();
    dispath(get_users(data)).then(setusername(""), setpassword(""));
  };
  return (
    <div>
      {user ? (
        <div onClick={() => setvisibility("block")} style={{ display: "flex",alignItems:"center" }}>
          <img className={Styles.Dp} src={user[0].profile_picture} alt="(DP)" />
          <p>{user[0].user}</p>
        </div>
      ) : (
        <p onClick={() => setvisibility("block")}>Login</p>
      )}
      <div className={Styles.login_modal} style={{ display: login_visibility }}>
        {!user ? (
          <div>
            <img
              className={Styles.cancel}
              onClick={() => setvisibility("none")}
              src={Cancel}
              alt="cancel"
            />
            <form onSubmit={(e) => handle_login(e)}>
              <h3>Have an Email account?</h3>
              <input
                value={username}
                onChange={(e) => setusername(e.target.value)}
                type="text"
                placeholder="Enter your email"
                className={Styles.login_inputs}
              />
              <br />
              <input
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                type="text"
                placeholder="Enter Your password"
                className={Styles.login_inputs}
              />
              <br />
              <input
                type="submit"
                value="Login"
                className={Styles.login_submit}
              />
            </form>
            {error && <h4  style={{color:"#d63031"}}>Username or Password Incorrect</h4>}
            {loading && <h4>Loading...</h4>}
          </div>
        ) : (
          <div>
            <img
              className={Styles.cancel}
              onClick={() => setvisibility("none")}
              src={Cancel}
              alt="cancel"
            />
            <h2>Welcome {user[0].user}</h2>
            <img
              className={Styles.profile_picture}
              src={user[0].profile_picture}
              alt="profile_photo"
            />
            <br />
            <img
              src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg"
              alt="Disney Plus"
            />
            <button
              className={Styles.login_submit}
              onClick={() => dispath(log_out())}
            >
              Log Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
export default Login;
