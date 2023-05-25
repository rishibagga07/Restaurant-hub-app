import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useJwt } from "react-jwt";
//const token = "Your JWT";+
import * as Yup from "yup";
import { Formik, useFormik } from "formik";

const Login = () => {

//const { decodedToken, isExpired } = useJwt(token);

    
  const [Login, SetLogin] = useState();

  const [isLoggedin, setIsLoggedin] = useState(false);
  const navigateToBackgroundimg = useNavigate();



  const NavigateToBookingPage = () => {
    debugger
    
    // sending obj to another page
    navigateToBackgroundimg("/backgroundimg");
  
  };


  const loginauth = () => {
    debugger;
    
    console.log("em", Login);
    console.log("values", values);
    debugger;
    axios
      .post("https://localhost:7089/api/Authenticate",values)
      .then((res) => {
        console.log("res", res.data);

        //let token = res.data.token; 

        // 1 login or logout
        localStorage.setItem("currentUser", JSON.stringify(res.data));
        setIsLoggedin(true);
       // setAuthToken(token);
       sessionStorage.setItem("sessionUser", res.data);
        
      })
      .catch((err) => {
        alert("Wrong With loginauth API");
      });
      NavigateToBookingPage();
  };




  const changehandle = (event) => {
    debugger;


    SetLogin({
      ...Login,
      [event.target.name]: event.target.value,
    });
    console.log("event.target.value", event.target.value);
    console.log("Login", Login);
  };


  // FORMIK && YUP VALIDATIONS 

  const initValues = {
    email:"",
    password: ""
  };
 
  const SignupSchema = Yup.object().shape({
   
    password: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
  });

  const { values, errors, handleBlur, touched, handleSubmit, handleChange } =
  // setgetbookingcloumn( values.bookingCount);
 
    useFormik({
      initialValues: initValues,
      validationSchema: SignupSchema,

      onSubmit: (values) => {

        
      },

    });

  return (
    <div>




<form onSubmit={handleSubmit} >
      <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex align-items-center justify-content-center h-100">
            <div className="col-md-8 col-lg-7 col-xl-6">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                className="img-fluid"
                alt="Phone image"
              />
            </div>
            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <form>
                {/* <!-- Email input --> */}
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    name="email"
                    className="form-control form-control-lg"
                   // onChange={changehandle}
                   onChange={ handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  <div className="text-danger" > 
                  {errors.email && touched.email && errors.email}
                  </div>
                  <label className="form-label" for="form1Example13">
                    Email address
                  </label>
                 
                </div>

                {/* <!-- Password input --> */}
                <div className="form-outline mb-4">
                  <input
                    type="password"
                    name="password"
                    className="form-control form-control-lg"
                    //onChange={changehandle}
                    onChange={ handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  /> <div className="text-danger" > 
                  {errors.password && touched.password && errors.password}
                  </div>
                  <label className="form-label" for="form1Example23">
                    Password
                  </label>
                  
                </div>

               

                {/* <!-- Submit button --> */}
                <button
                  type="submit"
                  className="btn btn-primary btn-lg btn-block"
                  onClick={loginauth}
                >
                  Sign in
                </button>

                <div className="divider d-flex align-items-center my-4">
                  <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
                </div>

                <a
                  className="btn btn-primary btn-lg btn-block"
                  href="#!"
                  role="button"
                >
                  <i className="fab fa-facebook-f me-2"></i>Continue with
                  Facebook
                </a>
                <a
                  className="btn btn-primary btn-lg btn-block"
                  href="#!"
                  role="button"
                >
                  <i className="fab fa-twitter me-2"></i>Continue with Twitter
                </a>
              </form>
            </div>
          </div>
        </div>
      </section>
      </form>
     
    </div>
  );
};

export default Login;
