import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as ArrowRightIcon } from "../assets/svg/keyboardArrowRightIcon.svg";

import visibilityIcon from "../assets/svg/visibilityIcon.svg";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { toast } from "react-toastify";

import OAuth from "../components/OAuth";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const auth = getAuth();

      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      toast.success("successfully logged in!");

      user && navigate("/");
    } catch (error) {
      toast.error("Bad User Credentials");
    }
  };
  return (
    <>
      <div className="pageContainer">
        <header>
          <p className="pageHeader">Weclome Back!</p>
        </header>

        <main>
          <form onSubmit={onSubmit}>
            <input
              type="email"
              placeholder="email"
              id="email"
              value={email}
              onChange={onChange}
              className="emailInput"
            />

            <div className="passwordInputDiv">
              <input
                type={showPassword ? "text" : "password"}
                className="passwordInput"
                placeholder="password"
                value={password}
                onChange={onChange}
                id="password"
              />

              <img
                src={visibilityIcon}
                alt="show password"
                className="showPassword"
                onClick={() => setShowPassword((prevState) => !prevState)}
              />
            </div>

            <Link to="/forgot-password" className="forgotPasswordLink">
              Forgot Password?
            </Link>

            <div className="signInBar">
              <p className="signInText">Sign In</p>
              <button className="signInButton">
                <ArrowRightIcon fill="#fff" width="34px" height="34px" />
              </button>
            </div>
          </form>
          <OAuth />

          <Link to="/sign-up" className="registerLink">
            Sign Up Intead
          </Link>
        </main>
      </div>
    </>
  );
};

export default SignIn;
