import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import style from "./LogIn.module.css";
import profile from "../profile.jpeg";
// import Header from "../Components/Header/Header";

function LogIn() {
  const navigate = useNavigate();
  const initialValues = { name: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);

    
    const loggedUser = JSON.parse(localStorage.getItem("registeredUserList"));
    const found = loggedUser.find((user) =>user.name === formValues.name && user.password === formValues.password
    );
    if (found) {
      alert(`Welcome ${found.name}`);
      navigate("../App");
    } else {
      alert("wrong Credentials");
    }
    // navigate("/App");
  };

  // useEffect(() => {
  //   if (Object.keys(formErrors).length === 0 && isSubmit) {
  //   }
  // }, [formErrors, isSubmit]);

  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "*Username is required!";
    }
    var spaceRegx = /\s/;
    if (spaceRegx.test(values.name)) {
      errors.name = "*username name wouldn't have whiteSpace";
    } else if (spaceRegx.test(values.email)) {
      errors.email = "*email wouldn't have whiteSpace";
    } else if (spaceRegx.test(values.password)) {
      errors.password = "*password wouldn't have whiteSpace";
    }

    if (!values.password) {
      errors.password = "*Password is required";
    } else if (values.password.length < 8) {
      errors.password = "*Password must be more than 8 characters";
    } else if (values.password.length > 10) {
      errors.password = "*Password cannot exceed more than 10 characters";
    }

    return errors;
  };

  return (
    <>
      {/* <Header/> */}
      <div className={style.login}>
        <form onSubmit={handleSubmit}>
          <div className={style.outer}>
            {Object.keys(formErrors).length === 0 && isSubmit ? (
              <div style={{ color: "green" }}>Signed in successfully</div>
            ) : null}
            <div className={style.img}>
              <div className={style.containerImg}>
                <img className={style.profile} src={profile} alt="profile" />
              </div>
            </div>
            <input
              className={style.user}
              type="text"
              name="name"
              placeholder="Username"
              value={formValues.name}
              onChange={handleChange}
            />
            <p style={{ color: "red" }}>{formErrors.name}</p>
            <input
              className={style.pass}
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
            />
            <p style={{ color: "red" }}>{formErrors.password}</p>

            <div className={style.btn}>
              <p style={{ color: "white" }}>
                Don't have an account?
                <br />
                <Link to="/register/Register" style={{ color: "blue" }}>
                  Register
                </Link>
              </p>
              <button>Login</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default LogIn;
