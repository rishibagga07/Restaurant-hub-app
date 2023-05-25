import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
//import { useNavigate } from 'react-router-dom'
import img from "../Screen/img/img.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import {
  FcAbout,
  FcApproval,
  FcAssistant,
  FcBusinessman,
  FcHome,
  FcPrivacy,
  FcReadingEbook,
  FcRegisteredTrademark,
  FcShop,
  FcUnlock,
} from "react-icons/fc";
import { Cart } from "./Cart";
import { AboutUs } from "./AboutUs";

//import { Us } from "./Food";
//import { Food } from './Food'

export const Backgroundimg = (props) => {
  const [GetCountry, SetGetCountry] = useState();
  const [AddNewUser, SetAddNewUser] = useState();
  const [StateGetBy_CountryID, SetStateGetBy_CountryID] = useState();
  const [CityGetBy_StateID, SetCityGetBy_StateID] = useState();
  const [GetAllCities, SetGetAllCities] = useState();
  const [RestaurantsByCityID, SetRestaurantsByCityID] = useState();
  const [GetAllRestaurants, SetGetAllRestaurants] = useState();
  const [ StoreRestID ,SetStoreRestID] = useState();
  const navigateTofoodlist = useNavigate();
  const [UserID , SetUserID] = useState({});
  const cartLength = props.cartLength;
  useEffect(() => {
    GetUserDataFromLocalStorages();
    GetAllCountry();
  
    GetAllCity();
    GetAllRestaurantsfunction();
    GetRestaurantIDFromLocalStorages();
  }, []);



// local storage
const GetUserDataFromLocalStorages = () => {
  debugger
  
  let user;
  const getUserDataFromLocalStorages = JSON.parse(localStorage.getItem("currentUser"));
  console.log("getUserDataFromLocalStorages", getUserDataFromLocalStorages);
  user = getUserDataFromLocalStorages;
  
  SetUserID(user);;
  console.log("StoreRestID", StoreRestID);
};
 


  const CleanStorageData = () => {

    localStorage.removeItem("currentUser")
    SetUserID(null);
  }

  const NavigateToBookingPage = (item) => {
    // const history = useHistory()
    // 👇️ navigate to /contacts
    debugger;
    console.log("item", item);

    // sending obj to another page
    navigateTofoodlist("/us", { state: { item } });

    console.log("item", item);
  };


// local storage
  const GetRestaurantIDFromLocalStorages = () => {
    debugger
    
    let RestID;
    const GetUserIDFromLocalStorage = JSON.parse(localStorage.getItem("restaurantsData")).restID;
    console.log("GetUserIDFromLocalStorage", GetUserIDFromLocalStorage);
    RestID = GetUserIDFromLocalStorage;
    console.log("RestID", RestID);
    SetStoreRestID(RestID);
    console.log("StoreRestID", StoreRestID);
  };

  const GetAllCountry = () => {
    axios
      .get("https://localhost:7089/api/country/GetAllCountry")
      .then((res) => {
        //axios.get("https://localhost:7138/api/country").then((res)=>{
        SetGetCountry(res.data);
        console.log("GetCountry", res.data);
      })
      .catch((e) => {
        alert("Wrong With API");
      });
  };

  const handleCountryChange = (e) => {
   
    const countryid = e.target.value;

    console.log("countryid", countryid);

    axios
      .get("https://localhost:7089/api/stateGetByCountryID/" + countryid)
      .then((res) => {
        SetStateGetBy_CountryID(res.data);
        console.log("GetCountry", res.data);
      })
      .catch((e) => {
        alert("Wrong With API");
      });
  };

  const handleStateChange = (e) => {

    const stateid = e.target.value;
 
    console.log("stateid", stateid);

    axios
      .get("https://localhost:7089/api/CityGetByStateID/" + stateid)
      .then((res) => {
        SetCityGetBy_StateID(res.data);
        console.log("CityGetBy_StateID", res.data);
      })
      .catch((e) => {
        alert("Wrong With API");
      });
  };

  // toaster

  const notify = () => toast("Your Request Sending For Approval!");
  const SelectLocation = () => toast("Please Select Your Location!");



  const AddChangeHandller = (event) => {
    event.preventDefault();

    debugger;
    SetAddNewUser({ ...AddNewUser, [event.target.name]: event.target.value });
    console.log(AddNewUser);
  };

  const AddNewUserFunction = () => {
    debugger;
    console.log("addnewuser", AddNewUser);
    axios
      .post("https://localhost:7089/api/users/AddUser", AddNewUser)
      .then((res) => {
        console.log("res.data", res.data);
        SetAddNewUser(res.data);
       
        notify();
      })
      .catch((e) => {
        alert("Wrong With AddNewUser API");
      });
  };

  const foodRef = useRef(null);

  const scrollToFood = () => {
    foodRef.current.scrollIntoView({ behavior: "smooth" });
  };

  // get All Restaurants

  const GetAllRestaurantsfunction = () => {
    axios
      .get("https://localhost:7089/api/restaurant/iunitofwork")
      .then((res) => {
        SetGetAllRestaurants(res.data);
        console.log("res.data", res.data);
      })
      .catch((e) => {
        alert("Wrong With GetAllRestaurants API ");
      });
  };

  // getAll Cities

  const GetAllCity = () => {
    axios
      .get("https://localhost:7089/api/restaurant/GetAllCity")
      .then((res) => {
        SetGetAllCities(res.data);
        console.log("res.data", res.data);
      })
      .catch((e) => {
        alert("Wrong With GetAllCity API ");
      });
  };

  const handleCityChange = (e) => {
    // SetSelectedStateId(null);
    const cityid = e.target.value;
    // setSelectedCountryId(countryid);
    console.log("countryid", cityid);

    debugger;
    axios
      .get(
        "https://localhost:7089/api/restaurant/RestaurantGetByCity_ID/" + cityid
      )
      .then((res) => {
        SetRestaurantsByCityID(res.data);
        console.log("res.data", res.data);
      })
      .catch((e) => {
        alert("Wrong With GetRestaurantsByCityID API ");
      });
  };

  



  return (
    <div>




      
      <ToastContainer />

      <div style={{ position: "relative" }}>
        <nav
          style={{
            position: "absolute",
            top: 10,
            left: 0,
            width: "100%",
            textAlign: "left",
            //  backgroundColor: "#e8e8e8"
          }}
        >
          <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
            <li style={{ display: "inline-block", margin: "0 10px" }}>
              <Link to="/backgroundimg">
                <FcHome size={"50"} />
              </Link>
            </li>
            <li style={{ display: "inline-block", margin: "0 10px" }}>
              <a href="#" className="text-white">
                <FcAbout size={"50"} />
              </a>
            </li>
            <li style={{ display: "inline-block", margin: "0 10px" }}>
              <a href="#food" className="text-white" onClick={scrollToFood}>
                <FcReadingEbook size={"50"} />
              </a>
            </li>
            <li style={{ display: "inline-block", margin: "0 10px" }}>
              <a href="#" className="text-white">
                <FcAssistant size={"50"} />
              </a>
            </li>

            <li
              style={{ display: "inline-block", margin: "0 10px" }}
              data-toggle="modal"
              data-target="#newModall"
            >
              <a href="#" className="text-white">
                <FcBusinessman size={"50"} />
              </a>
            </li>
            <li
              style={{ display: "inline-block", margin: "0 10px" }}
              className="nav-item"
            >
              <Link to="/userApproval" className="nav-link text-white ">
                <FcApproval size={"50"} />
              </Link>
            </li>

            <li
              style={{ display: "inline-block", margin: "0 10px" }}
              className="nav-item"
            >
              <Link to="/restaurant" className="nav-link text-white ">
                {" "}
                <FcRegisteredTrademark size={"50"} />
              </Link>
            </li>
           

{UserID == null ?  <li
              style={{ display: "inline-block", margin: "0 10px" }}
              className="nav-item"
            > 
            <Link to="/login" className="nav-link text-dark ">
                {" "}
               {  <FcUnlock size={"50"} />   }
              </Link>
              
   
            </li>  :  <li
              style={{ display: "inline-block", margin: "0 10px" }}
              className="nav-item"
            > 
             
              


              <Link to="/login" className="nav-link text-dark " onClick={CleanStorageData} >
                {" "}
                <FcPrivacy size={"50"} />
              </Link>

   
            </li>}
            


            
            <li
              style={{ display: "inline-block", margin: "0 10px" }}
              className="nav-item"
            >
              <Link to="/cart" className="nav-link text-white ">
                {" "}
                <FcShop size={"50"} /> {cartLength}
              </Link>
            </li>
          </ul>
        </nav>

        {/* background img */}
        <div
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            height: "600px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          className="text-center text-white"
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h1 style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
              Welcome To FoodHub
            </h1>

            {/* <button className="btn btn-secondary" style={{ marginTop: "20px" }}>
              Login
            </button> */}

            <div>
              <div className="form-group row m-3 p-3 ">
                <label htmlFor="textcity" className="text-secondry">
                  select Your Location
                </label>

                <div className="col-sm-8">
                  <select
                    id="textcity"
                    //placeholder="Enter RoleId"
                    name="cityID"
                    className="form-control"
                    onChange={handleCityChange}
                    //value={adduser.roleId}
                  >
                    <option>-----Get Restaurants By Your City-----</option>
                    {GetAllCities?.map((x) => {
                      return <option value={x.cityID}>{x.cityName}</option>;
                    })}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Get All Restaurants Card */}

        {RestaurantsByCityID ? (
          // Restaurants Card
          // href="/us"
          <div className="cards-list">
            {RestaurantsByCityID?.map((item) => (
              <a onClick={() => NavigateToBookingPage(item)}>
                <div className="card" key={item.restID}>
                  <div className="card_image">
                    <img
                      src={`data:image/jpg;base64, ${item.restImage} `}
                      height="250"
                      width="400"
                    />
                  </div>

                  <div className="card_title title-white">
                    <p>{item.restName}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        ) : (
          <div className="cards-list">
            {GetAllRestaurants?.map((item) => (
               <a onClick={() => SelectLocation()}>
              <div className="card" key={item.restID}>
                <div className="card_image">
                  <img
                    src={`data:image/jpg;base64, ${item.restImage} `}
                    height="250"
                    width="400"
                  />
                </div>
                <div className="card_title title-white">
                  <p>{item.restName}</p>
                  
                </div>
               
              </div>
              </a>
            ))}
          </div>
        )}

        {/* below foo list */}
        <div ref={foodRef}>{/* <Us></Us> */}</div>

        {/* login form */}

        <div className="modal" id="newModal" role="dialog">
          <section className="vh-100">
            <div className="container-fluid h-custom">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-md-9 col-lg-6 col-xl-5">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                    className="img-fluid"
                    alt="Sample image"
                  />
                </div>
                <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                  <form>
                    <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                      <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                      <button
                        type="button"
                        className="btn btn-primary btn-floating mx-1"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </button>

                      <button
                        type="button"
                        className="btn btn-primary btn-floating mx-1"
                      >
                        <i className="fab fa-twitter"></i>
                      </button>

                      <button
                        type="button"
                        className="btn btn-primary btn-floating mx-1"
                      >
                        <i className="fab fa-linkedin-in"></i>
                      </button>
                    </div>

                    <div className="divider d-flex align-items-center my-4">
                      <p className="text-center fw-bold mx-3 mb-0">Or</p>
                    </div>

                    {/* <!-- Email input --> */}
                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        id="form3Example3"
                        className="form-control form-control-lg"
                        placeholder="Enter a valid email address"
                      />
                      <label className="form-label" htmlFor="form3Example3">
                        Email address
                      </label>
                    </div>

                    {/* <!-- Password input --> */}
                    <div className="form-outline mb-3">
                      <input
                        type="password"
                        id="form3Example4"
                        className="form-control form-control-lg"
                        placeholder="Enter password"
                      />
                      <label className="form-label" htmlFor="form3Example4">
                        Password
                      </label>
                    </div>

                    <div className="d-flex justify-content-between align-items-center">
                      {/* <!-- Checkbox --> */}
                      <div className="form-check mb-0">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          value=""
                          id="form2Example3"
                        />
                        <label className="form-check-label" htmlFor="form2Example3">
                          Remember me
                        </label>
                      </div>
                      <a href="#!" className="text-body">
                        Forgot password?
                      </a>
                    </div>

                    <div className="text-center text-lg-start mt-4 pt-2">
                      <button type="button" className="btn btn-primary btn-lg">
                        Login
                      </button>
                      <p className="small fw-bold mt-2 pt-1 mb-0">
                        Don't have an account?{" "}
                        <a href="#!" className="link-danger">
                          Register
                        </a>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
              {/* <!-- Copyright --> */}
              <div className="text-white mb-3 mb-md-0">
                Copyright © 2020. All rights reserved.
              </div>
              {/* <!-- Copyright --> */}

              {/* <!-- Right --> */}
              <div>
                <a href="#!" className="text-white me-4">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#!" className="text-white me-4">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#!" className="text-white me-4">
                  <i className="fab fa-google"></i>
                </a>
                <a href="#!" className="text-white">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
              {/* <!-- Right --> */}
            </div>
          </section>
        </div>

        {/* Save */}
        <form>
          <div className="modal" id="newModall" role="dialog">
            <div className="modal-dialog">
              <div className="modal-content">
                {/* Header */}
                <div className="modal-header">
                  <div className="model-title"> New User </div>
                  <button className="close" data-dismiss="modal">
                    <span>&times;</span>
                  </button>
                </div>

                {/* Body */}

                <div className="modal-body">
                  <div className="form-group row">
                    <label htmlFor="textname" className="col-sm-4">
                      Name
                    </label>

                    <div className="col-sm-8">
                      <input
                        type="text"
                        id="textname"
                        placeholder="Enter Name"
                        name="userName"
                        className="form-control"
                        onChange={AddChangeHandller}
                        // value={addep.departmentName}
                      ></input>
                    </div>
                  </div>

                  <div className="form-group row">
                    <label htmlFor="numage" className="col-sm-4">
                      Age
                    </label>

                    <div className="col-sm-8">
                      <input
                        type="number"
                        id="numage"
                        placeholder="Enter Name"
                        name="userAge"
                        className="form-control"
                        onChange={AddChangeHandller}
                        // value={addep.departmentName}
                      ></input>
                    </div>
                  </div>

                  <div className="form-group row">
                    <label htmlFor="textaddress" className="col-sm-4">
                      Address
                    </label>

                    <div className="col-sm-8">
                      <input
                        type="text"
                        id="textaddress"
                        placeholder="Enter Address"
                        name="userAddress"
                        className="form-control"
                        onChange={AddChangeHandller}
                        // value={addep.departmentName}
                      ></input>
                    </div>
                  </div>

                  <div className="form-group row">
                    <label htmlFor="textEmail" className="col-sm-4">
                      Email
                    </label>

                    <div className="col-sm-8">
                      <input
                        type="text"
                        id="textEmail"
                        placeholder="Enter Email Address"
                        name="userEmail"
                        className="form-control"
                        onChange={AddChangeHandller}
                        // value={addep.departmentName}
                      ></input>
                    </div>
                  </div>

                  <div className="form-group row">
                    <label htmlFor="textpassword" className="col-sm-4">
                      PassWord
                    </label>

                    <div className="col-sm-8">
                      <input
                        type="text"
                        id="textpassword"
                        placeholder="Enter Email Address"
                        name="userPassWord"
                        className="form-control"
                        onChange={AddChangeHandller}
                        // value={addep.departmentName}
                      ></input>
                    </div>
                  </div>

                  <div className="form-group row">
                    <label htmlFor="textcountryId" className="col-sm-4">
                      Country
                    </label>

                    <div className="col-sm-8">
                      <select
                        id="textcountryId"
                        // name="departmentId"
                        className="form-control"
                        // onChange={changehandle}
                        //value={adduser.departName}
                        onChange={handleCountryChange}
                        //  handleSelectChange={handleCountryChange}
                      >
                        <option>-----Select Country-----</option>

                        {GetCountry?.map((x) => {
                          return (
                            <option value={x.countryID}>{x.countryName}</option>
                          );
                        })}
                      </select>
                    </div>
                  </div>

                  <div className="form-group row">
                    <label htmlFor="textstate_ID" className="col-sm-4">
                      State
                    </label>

                    <div className="col-sm-8">
                      <select
                        id="textstate_ID"
                        //placeholder="Enter RoleId"
                        name="state_ID"
                        className="form-control"
                        //  onChange={changehandle}
                        //value={adduser.roleId}
                        onChange={handleStateChange}
                      >
                        <option>-----Select State-----</option>
                        {StateGetBy_CountryID?.map((x) => {
                          return (
                            <option value={x.stateID}>{x.stateName}</option>
                          );
                        })}
                      </select>
                    </div>
                  </div>

                  <div className="form-group row">
                    <label htmlFor="textcity" className="col-sm-4">
                      City
                    </label>

                    <div className="col-sm-8">
                      <select
                        id="textcity"
                        //placeholder="Enter RoleId"
                        name="cityID"
                        className="form-control"
                        onChange={AddChangeHandller}
                        //value={adduser.roleId}
                      >
                        <option>-----Select City-----</option>
                        {CityGetBy_StateID?.map((x) => {
                          return <option value={x.cityID}>{x.cityName}</option>;
                        })}
                      </select>
                    </div>
                  </div>

                  {/* footer */}

                  <div className="modal-footer">
                    <button
                      className="btn btn-primary"
                      onClick={AddNewUserFunction}
                    >
                      Save
                    </button>
                    <button className="btn btn-danger">Cancel</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>




{/* Ratings */}
 


<AboutUs/>

      </div>
    </div>
  );
};

{
  /* // <img src={img} /> */
}
