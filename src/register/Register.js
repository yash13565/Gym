import React, { useEffect, useState } from "react";
import style from "./Register.module.css";
import profile from "../profile.jpeg";
import { Link, useNavigate } from "react-router-dom";
// import Header from "../Components/Header/Header";

function Register() {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      let userList =
        JSON.parse(localStorage.getItem("registeredUserList")) || [];
      userList.push(formValues);
      localStorage.setItem("registeredUserList", JSON.stringify(userList));
      navigate("../login/Login");
    }
  }, [formErrors, isSubmit, formValues, navigate]);

  const validate = (values) => {
    const errors = {};

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    var spaceRegx = /\s/;
    if (spaceRegx.test(values.name)) {
      errors.name = "*username name wouldn't have whiteSpace";
    } else if (spaceRegx.test(values.email)) {
      errors.email = "*email wouldn't have whiteSpace";
    } else if (spaceRegx.test(values.password)) {
      errors.password = "*password wouldn't have whiteSpace";
    }

    if (!values.name) {
      errors.name = "*Username is required!";
    }

    if (!values.email) {
      errors.email = "*Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "*This is not a valid email format!";
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
      <div className={style.register}>
              {/* <Header/> */}
      <form onSubmit={handleSubmit} className={style.emailContainer}>
      {/* <Header/> */}
        <div className={style.outer}>
          {Object.keys(formErrors).length === 0 && isSubmit ? (
            <div style={{ color: "green" }}>Registered successfully</div>
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
            className={style.email}
            type="text"
            name="email"
            placeholder="Email"
            value={formValues.email}
            onChange={handleChange}
          />
          <p style={{ color: "red" }}>{formErrors.email}</p>

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
          <p style={{color:"white"}}>
              Already a Existing user ?
              <br />
              <Link to ='/login/LogIn' style={{color:"blue"}}>Log-in</Link>
            </p>
            <button>Register</button>
          </div>

        </div>
      </form>
      </div>
    </>
  );
}

export default Register;
