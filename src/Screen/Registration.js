import React from "react";


export const Registration = () => {
  return (
    <div>


<section class="loginWrapper">
  
  <ul class="tabs">
      <li class="active">Login</li>
      <li>Register</li>
  </ul>

  <ul class="tab__content">
  
      <li class="active">
          <div class="content__wrapper">
              <form method="POST" action="">
                  <input type="email" name="email" placeholder="email"/>
                  <input type="password" name="password" placeholder="Password"/>
                  <input type="submit" value="Login" name="login"/>
              </form>
          </div>
      </li>
 
      <li>
          <div class="content__wrapper">
              <form method="POST" action="">
                  <input type="name" name="name" placeholder="Username"/>
                  <input type="email" name="email" placeholder="email"/>
                  <input type="pass" name="pass" placeholder="Password"/>
                  <input type="repass" name="repass" placeholder="Repeat-Password"/>
                  <input type="submit" value="Register" name="register"/>
              </form>
          </div>
      </li>

  </ul>

</section>

  <div class="logginFormFooter">
  {/* &copy; 2015-<?php echo date(Y);?> Matthew Bryce <a href="#">awebsite.com</a> */}
  </div>


    </div>
  );
};





{/* <section className="vh-100">
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
      <form> */}
        {/* <!-- Email input --> */}
        // <div className="form-outline mb-4">
        //   <input
        //     type="email"
        //     id="form1Example13"
        //     className="form-control form-control-lg"
        //   />
        //   <label className="form-label" for="form1Example13">
        //     Email address
        //   </label>
        // </div>

        {/* <!-- Password input --> */}
        // <div className="form-outline mb-4">
        //   <input
        //     type="password"
        //     id="form1Example23"
        //     className="form-control form-control-lg"
        //   />
        //   <label className="form-label" for="form1Example23">
        //     Password
        //   </label>
        // </div>

        // <div className="d-flex justify-content-around align-items-center mb-4">
          {/* <!-- Checkbox --> */}
        //   <div classNames="form-check">
        //     <input
        //       className="form-check-input"
        //       type="checkbox"
        //       value=""
        //       id="form1Example3"
        //       checked
        //     />
        //     <label className="form-check-label" for="form1Example3">
        //       {" "}
        //       Remember me{" "}
        //     </label>
        //   </div>
        //   <a href="#!">Forgot password?</a>
        // </div>

        {/* <!-- Submit button --> */}
//         <button
//           type="submit"
//           className="btn btn-primary btn-lg btn-block"
//         >
//           Sign in
//         </button>

//         <div className="divider d-flex align-items-center my-4">
//           <p className="text-center fw-bold mx-3 mb-0 text-muted">
//             OR
//           </p>
//         </div>

//         <a
//           className="btn btn-primary btn-lg btn-block"
//           href="#!"
//           role="button"
//         >
//           <i className="fab fa-facebook-f me-2"></i>Continue with
//           Facebook
//         </a>
//         <a
//           className="btn btn-primary btn-lg btn-block"
//           href="#!"
//           role="button"
//         >
//           <i className="fab fa-twitter me-2"></i>Continue with Twitter
//         </a>
//       </form>
//     </div>
//   </div>
// </div>
// </section>