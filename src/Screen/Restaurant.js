import axios from "axios";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";
import { Formik, useFormik } from "formik";
import { withFormik, Form, FastField, ErrorMessage } from "formik";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
// export const stripePromise = loadStripe(
//   "pk_test_51MvI1YGz4lorc9qOp1ihr5i7vPtqQvN26m7IE6Oy0UmievhX3LLPojBoXR1rGzsKpDfkqloNEe3Sj0rXNoUruHq90007htE97y"
// );


export const Restaurant = () => {
  const [GetRestaurants, SetGetRestaurants] = useState();
  const [GetCountry, SetGetCountry] = useState();
  const [AddNewRestaurants, SetAddNewRestaurants] = useState();
  const [StateGetBy_CountryID, SetStateGetBy_CountryID] = useState();
  const [CityGetBy_StateID, SetCityGetBy_StateID] = useState();
  const [Base64, SetBase64] = useState();
  const [GetAllCities, SetGetAllCities] = useState();
  const [RestaurantsByCityID, SetRestaurantsByCityID] = useState();
  const [description, setDescription] = useState("");
  

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("");
   const stripe = useStripe();
   const elements = useElements();
  

  const [RestaurantsRegistrationPrice, SetRestaurantsRegistrationPrice] =
    useState();
  let base64textString = " ";
  let grandTotal = RestaurantsRegistrationPrice;



  useEffect(() => {
    GetAllRestaurants();
    GetAllCountry();
    GetAllCity();
  }, []);

  const AddNewUserFunction = () => {
    debugger;
    console.log("values", values);
    const obj = {
      restID: 0,
      restName: values.restName, // AddNewRestaurants.restName,
      restImage: Base64,
      restAddress: values.restAddress, // AddNewRestaurants.restAddress,
      restEmail: values.restEmail, // AddNewRestaurants.restEmail,
      restPassword: values.restPassword, //AddNewRestaurants.restPassword,
      cityID: AddNewRestaurants.cityID,
    };

    console.log("addnewuser", obj);
    axios
      .post("https://localhost:7089/api/restaurant/AddRestaurant", obj)
      .then((res) => {
        console.log("res.data", res.data);
        SetAddNewRestaurants(res.data);
        // GetAllRestaurants();;
        // notify();
        const obj = {
         
          restName: "", // AddNewRestaurants.restName,
          restImage: "",
          restAddress: "", // AddNewRestaurants.restAddress,
          restEmail: "", // AddNewRestaurants.restEmail,
          restPassword: "", //AddNewRestaurants.restPassword,
          cityID: "",
        };
    
        notify();
      })
      .catch((e) => {
        alert("Wrong With AddNewUser API");
      });
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
    // SetSelectedStateId(null);
    const countryid = e.target.value;
    // setSelectedCountryId(countryid);
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
    // setSelectedStateId(null);
    const stateid = e.target.value;
    // SetSelectedStateId(stateid);
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

  const AddChangeHandller = (event) => {
    SetAddNewRestaurants({
      ...AddNewRestaurants,
      [event.target.name]: event.target.value,
    });

    debugger;
    const id = event.target.value;
    console.log("id", id);

    debugger;
    if (id) {
      RestautantsRegistrationFee(id);
    }
  };

  const RestautantsRegistrationFee = (id) => {
    if (id === "1") {
      SetRestaurantsRegistrationPrice(1000);
    }
    if (id === "2") {
      SetRestaurantsRegistrationPrice(2000);
    }
    if (id === "3") {
      SetRestaurantsRegistrationPrice(3000);
    }
    if (id === "4") {
      SetRestaurantsRegistrationPrice(4000);
    }
    if (id === "5") {
      SetRestaurantsRegistrationPrice(5000);
    }
    if (id === "6") {
      SetRestaurantsRegistrationPrice(6000);
    }
    if (id === "7") {
      SetRestaurantsRegistrationPrice(7000);
    }
    if (id === "8") {
      SetRestaurantsRegistrationPrice(8000);
    }
    if (id === "9") {
      SetRestaurantsRegistrationPrice(9000);
    }
    if (id === "10") {
      SetRestaurantsRegistrationPrice(10000);
    }
    if (id === "11") {
      SetRestaurantsRegistrationPrice(11000);
    }
    if (id === "12") {
      SetRestaurantsRegistrationPrice(12000);
    }
    if (id === "13") {
      SetRestaurantsRegistrationPrice(13000);
    }
    if (id === "14") {
      SetRestaurantsRegistrationPrice(14000);
    }
    if (id === "15") {
      SetRestaurantsRegistrationPrice(15000);
    }
    if (id === "16") {
      SetRestaurantsRegistrationPrice(16000);
    }
    if (id === "17") {
      SetRestaurantsRegistrationPrice(17000);
    }
    if (id === "18") {
      SetRestaurantsRegistrationPrice(18000);
    }
    if (id === "19") {
      SetRestaurantsRegistrationPrice(19000);
    }
    if (id === "20") {
      SetRestaurantsRegistrationPrice(20000);
    }
    if (id === "21") {
      SetRestaurantsRegistrationPrice(21000);
    }
    if (id === "22") {
      SetRestaurantsRegistrationPrice(22000);
    }
    if (id === "23") {
      SetRestaurantsRegistrationPrice(23000);
    }
    if (id === "24") {
      SetRestaurantsRegistrationPrice(24000);
    }
    if (id === "25") {
      SetRestaurantsRegistrationPrice(25000);
    }
    if (id === "26") {
      SetRestaurantsRegistrationPrice(26000);
    }
    if (id === "27") {
      SetRestaurantsRegistrationPrice(27000);
    }
    if (id === "28") {
      SetRestaurantsRegistrationPrice(28000);
    }
    if (id === "29") {
      SetRestaurantsRegistrationPrice(29000);
    }
    if (id === "30") {
      SetRestaurantsRegistrationPrice(30000);
    }
    if (id === "31") {
      SetRestaurantsRegistrationPrice(3100);
    }
    if (id === "32") {
      SetRestaurantsRegistrationPrice(32000);
    }
  };

  const GetAllRestaurants = () => {
    axios
      .get("https://localhost:7089/api/restaurant/iunitofwork")
      .then((res) => {
        // axios.get("https://localhost:7138/api/users").then((res)=>{
        SetGetRestaurants(res.data);
        console.log("GetUser", res.data);
      })
      .catch((e) => {
        alert("Wrong With API");
      });
  };

  // base 64 handler

  const handleFileSelect = (evt) => {
    debugger;

    var files = evt.target.files;
    var file = files[0];

    if (files && file) {
      var reader = new FileReader();

      reader.onload = _handleReaderLoaded.bind(this);

      reader.readAsBinaryString(file);
    }
  };

  const _handleReaderLoaded = (readerEvt) => {
    debugger;
    var binaryString = readerEvt.target.result;
    base64textString = btoa(binaryString);
    // var text='data:image/png;base64,';
    SetBase64(base64textString);

    console.log("base64textString", base64textString);
    // var pic = text+base64textString;
    // saveClick.values.image=pic;
    // console.log(pic);
  };

  const RequestApprovedByAdmin = (restID, approvalID) => {
    debugger;
    console.log("event", restID, approvalID);
    const obj = {
      restID: restID,
      approvalID: approvalID,
    };
    axios
      .patch(
        "https://localhost:7089/api/restaurantCompanyRequestApprovedByAdmin",
        obj
      )
      .then((res) => {
        GetAllRestaurants();
        // notify();
      })
      .catch((e) => {
        alert("Wrong With RequestApprovedByAdmin API");
      });
  };

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

  // const RestaurantRegistrationPrice = (id) => {

  //   if (GetAllCities.cityID === 1){
  //     SetRestaurantsRegistrationPrice(10)
  //   }
  // }

  // FORMIK && YUP VALIDATIONS

  const initValues = {
    restName: "",

    restAddress: "",
    restEmail: "",
    restPassword: "",
  };

  const SignupSchema = Yup.object().shape({
    restName: Yup.string().required("Required"),

    restAddress: Yup.string().required("Required"),
    restEmail: Yup.string().email("Invalid email").required("Required"),
    restPassword: Yup.string().min(3).max(10).required("Required"),
  });

  // const obj = {
  //   restID: 0,
  //   restName: AddNewRestaurants.restName,
  //   restImage: Base64,
  //   restAddress: AddNewRestaurants.restAddress,
  //   restEmail: AddNewRestaurants.restEmail,
  //   restPassword: AddNewRestaurants.restPassword,
  //   cityID: AddNewRestaurants.cityID,
  // };

  const { values, errors, handleBlur, touched, handleSubmit, handleChange } =
    // setgetbookingcloumn( values.bookingCount);

    useFormik({
      initialValues: initValues,
      validationSchema: SignupSchema,

      onSubmit: (values) => {},
    });


    const DataClear = () => {

    //  debugger
    //   const initValues = {
    //     restName: values.restName ,
    
    //     restAddress: values.restAddress,
    //     restEmail:  values.restEmail,
    //     restPassword: values.restPassword ,
    //   };
    //   console.log("initValues" , initValues);
    
    //   initValues = ""
    console.log("initValues" , initValues);

    }

  // toaster

  const notify = () => toast("Your Request Sending For Approval!");
  const PaymentSuccessful = () => toast("Your Payment Successful!");

  function renderusergetall() {
    let GetUserRow = [];
    GetRestaurants?.map((item) =>
      GetUserRow.push(
        <tr>
          <td>{item.restName}</td>
          <img
            src={`data:image/jpg;base64, ${item.restImage} `}
            height="100"
            width="100"
          />
          <td>{item.restAddress}</td>
          <td>{item.restEmail}</td>
          <td>{item.city.cityName}</td>
          <td>{item.city.state.stateName}</td>
          <td>{item.city.state.country.countryName}</td>
          {item.approvalID ? (
            <td>{item.approvalID} </td>
          ) : (
            "Request Send For Approval"
          )}

          <td>
            <button
              className="btn btn-info p-2 m-1 "
              data-toggle="modal"
              data-target="#editModal"
              // onClick={() => edituser(item)}
            >
              Edit
            </button>
            <button
              className="btn btn-danger p-2 m-1 "
              //  onClick={() => DeleteUser(item.id)}
            >
              Delete
            </button>

            <button
              className="btn btn-info p-2 m-1 "
              //   data-toggle="modal"
              //   data-target="#editModal"
              onClick={() => RequestApprovedByAdmin(item.restID, 1)}
            >
              Approved
            </button>
            <button
              className="btn btn-danger p-2 m-1 "
              onClick={() => RequestApprovedByAdmin(item.restID, 2)}
            >
              Disapproved
            </button>

            <button
              className="btn btn-dark p-2 m-1 "
              onClick={() => RequestApprovedByAdmin(item.restID, 3)}
            >
              Block
            </button>
          </td>
        </tr>
      )
    );
    return GetUserRow;
  }



// Stripe Medthod 
  const hhandleSubmit = async (event) => {
    debugger;
    event.preventDefault();

    setLoading(true);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      setSuccess(false);
    } else {
      const { id } = paymentMethod;

      debugger;
      const paymentRequest = {
        token: id,
        // amount: amount,
        amount: grandTotal,
        // currency: currency,
        currency: "usd",
        description: description,
      };

      console.log("paymentRequest", paymentRequest);

      fetch("https://localhost:7089/api/Payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(paymentRequest),
      })
        .then((response) => response.json())
        .then((data) => {
          debugger;
          console.log("data", data);

          setLoading(false);
          setSuccess(true);
        //  RemoveItemsFromCart();
          notify();
         // pay();
        //  navigate();
         

        })
        .catch((error) => {
          setError(error.message);
          setLoading(false);
          setSuccess(false);
        });
    }
  };







  return (
    <div>
      {/* <div className="form-group row">
        <label htmlFor="textcity" className="col-sm-4">
          City
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
      </div> */}

      <ToastContainer />

      <div className="col row">
        <div className="col-1">
          <button
            className="btn btn-info m-2 p-2"
            data-toggle="modal"
            data-target="#newModal"
          >
            NewRegistration
          </button>
        </div>
      </div>

      <div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Picture</th>
              <th>Address</th>
              <th>Email</th>
              <th>City</th>
              <th>State</th>
              <th>Country</th>
              <th>Approval</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>{renderusergetall()}</tbody>
        </table>
      </div>

      {/* Save */}
      <form onSubmit={handleSubmit}>
        <div className="modal" id="newModal" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              {/* Header */}
              <div className="modal-header">
                <div className="model-title"> Restaurant Registration </div>
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
                      name="restName"
                      className="form-control"
                      //  onChange={AddChangeHandller}
                      // value={addep.departmentName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.restName}
                    ></input>{" "}
                    <div className="text-danger">
                      {errors.restName && touched.restName && errors.restName}
                    </div>
                  </div>
                </div>

                <div className="form-group row">
                  <label htmlFor="numage" className="col-sm-4">
                    Image
                  </label>

                  <div className="col-sm-8">
                    <input
                      type="file"
                      id="numage"
                      placeholder="Enter Name"
                      name="restImage"
                      className="form-control"
                      onChange={handleFileSelect}
                      // value={addep.departmentName}
                      // onChange={handleChange}
                      //  onBlur={handleBlur}
                      //  value={values.restImage}
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
                      name="restAddress"
                      className="form-control"
                      //  onChange={AddChangeHandller}
                      // value={addep.departmentName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.restAddress}
                    ></input>
                    <div className="text-danger">
                      {errors.restAddress &&
                        touched.restAddress &&
                        errors.restAddress}
                    </div>
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
                      name="restEmail"
                      className="form-control"
                      //   onChange={AddChangeHandller}
                      // value={addep.departmentName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.restEmail}
                    ></input>
                    <div className="text-danger">
                      {errors.restEmail &&
                        touched.restEmail &&
                        errors.restEmail}
                    </div>
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
                      name="restPassword"
                      className="form-control"
                      // onChange={AddChangeHandller}
                      // value={addep.departmentName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.restPassword}
                    ></input>
                    <div className="text-danger">
                      {errors.restPassword &&
                        touched.restPassword &&
                        errors.restPassword}
                    </div>
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
                        return <option value={x.stateID}>{x.stateName}</option>;
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

                <div className="form-group row">
                  <label htmlFor="textaddress" className="col-sm-4">
                    Restaurant Registration Fee
                  </label>

                  <div className="col-sm-8">
                    <h2>&#8377;{RestaurantsRegistrationPrice}</h2>
                    <div className="text-danger">
                      {errors.restAddress &&
                        touched.restAddress &&
                        errors.restAddress}
                    </div>
                  </div>
                </div>

                {/* footer */}

                <div className="modal-footer">
                  <button
                    className="btn btn-primary"
                    onClick={AddNewUserFunction}
                    data-target="#newPayment"
                    data-toggle="modal"
                    type="button"
                    data-dismiss="modal"
                  >
                    Save
                  </button>
                  {/* data-dismiss="modal" */}
                  <button className="btn btn-danger" onClick={DataClear} >Cancel</button> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>




      <div className="modal" id="newPayment" role="dialog">
        <div className="form-container">
          <form onSubmit={hhandleSubmit}>
            <div>
              <label htmlFor="amount">Amount:</label>
              <input
                type="number"
                id="amount"
                value={grandTotal}
                onChange={(event) => setAmount(event.target.value)}
              />
            </div>
            <div>
              <label htmlFor="currency">Currency:</label>
              <input
                type="text"
                id="currency"
                value={"INR"}
                onChange={(event) => setCurrency(event.target.value)}
              />
            </div>
            <div>
              <label htmlFor="description">Description:</label>
              <input
                type="text"
                id="description"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              />
            </div>
            <div>
              <label htmlFor="card-element">Card details:</label>
              <CardElement id="card-element" />
            </div>
            {error && <div className="error">{error}</div>}
            <button  onClick={PaymentSuccessful} data-dismiss="modal" type="submit" disabled={!stripe || loading}>
              {loading ? "Processing..." : "Pay"}
            </button>
            {success && <div  className="success" data-dismiss="modal"  > Payment succeeded!</div>}
          </form>
        </div>
      </div>





    </div>
  );
};
