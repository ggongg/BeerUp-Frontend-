import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../states/Provider";
import axios from "axios";
import { isEmpty } from "lodash";
import "../css/login.css";

export default function Login() {
  const navigate = useNavigate();
  const [, dispatch] = useContext(Context);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState({ username: "", password: "" });

  const onLogin = (e) => {
    e.preventDefault();

    axios
      .post("https://frey-hack-backend.herokuapp.com/users/login", {
        username,
        password,
      })
      .then((res) => {
        dispatch({
          type: "LOG_IN",
          userData: res.data,
        });
        navigate("/select");
      })
      .catch((error) => {
        setFormError(error.response.data);
      });
  };

  return (
    <div className="background">
      <div class="split left d-flex justify-content-center align-items-center">
        <img
          width={500}
          src="https://cdn.discordapp.com/attachments/989949757751427117/990281327792242769/BeerUp.gif"
        />
      </div>
      <div class="split right d-flex justify-content-center align-items-center">
        <div class="login-form d-flex flex-column justify-content-center align-items-center">
          <div class="login-title">Login</div>
          <form class="d-flex flex-column justify-content-center align-items-center">
            <div className="form-group mt-3">
              <label for="usernameInput">Username</label>
              <input
                type="text"
                className={`form-control ${
                  isEmpty(formError.username) ? "" : "is-invalid"
                }`}
                id="usernameInput"
                aria-describedby="emailHelp"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
              />
              <div
                id="validationServerUsernameFeedback"
                className="invalid-feedback"
              >
                {formError.username}
              </div>
            </div>

            <div className="form-group mt-4">
              <label for="passwordInput">Password</label>
              <input
                type="password"
                className={`form-control ${
                  isEmpty(formError.password) ? "" : "is-invalid"
                }`}
                id="passwordInput"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <div
                id="validationServerPasswordFeedback"
                className="invalid-feedback"
              >
                {formError.password}
              </div>
            </div>
            <a class="mt-4" href="/register">
              Don't have an account? Sign up
            </a>
            <button className="btn btn-primary mt-4" onClick={onLogin}>
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
