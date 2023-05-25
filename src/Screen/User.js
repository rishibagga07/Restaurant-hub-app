import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";

export const User = () => {
  const [GetUser, SetGetUser] = useState();
  const [GetCountry, SetGetCountry] = useState();
  const [AddNewUser, SetAddNewUser] = useState();
  const [StateGetBy_CountryID, SetStateGetBy_CountryID] = useState();
  //const [SelectedCountryId, setSelectedCountryId] = useState(null);

  const [CityGetBy_StateID, SetCityGetBy_StateID] = useState();
  //const [SelectedStateId, SetSelectedStateId] = useState(null);

  useEffect(() => {
    GetAllUser();
    GetAllCountry();
  }, []);

  const AddNewUserFunction = () => {
    debugger;
    console.log("addnewuser", AddNewUser);
    axios
      .post("https://localhost:7089/api/users/AddUser", AddNewUser)
      .then((res) => {
        console.log("res.data", res.data);
        SetAddNewUser(res.data);
        GetAllUser();
        notify();
      })
      .catch((e) => {
        alert("Wrong With AddNewUser API");
      });
  };

  // https://localhost:7138/api/country/iunitofwork
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

  // https://localhost:7138/api/users/repository

  const GetAllUser = () => {
    axios
      .get("https://localhost:7089/api/users/repository/iunitofwork")
      .then((res) => {
        // axios.get("https://localhost:7138/api/users").then((res)=>{
        SetGetUser(res.data);
        console.log("GetUser", res.data);
      })
      .catch((e) => {
        alert("Wrong With API");
      });
  };

  const AddChangeHandller = (event) => {
    SetAddNewUser({ ...AddNewUser, [event.target.name]: event.target.value });
    console.log("AddNewUser", AddNewUser);
  };

  // FORMIK && YUP VALIDATIONS

  const initValues = {
    userName: "",
    // userAge: 0,
    // userAddress: "",
    // userEmail: "",
    // userPassword: "",
    // cityID: 0,
    // roleID: 0,
  };

  const UserAddSchema = Yup.object().shape({
    userName: Yup.string().required("Required"),
    // userAge: Yup.number().required("Required"),
    // userAddress: Yup.string().required("Required"),
    // userEmail: Yup.string().email("Invalid email").required("Required"),
    // userPassword: Yup.string()
    //   .min(2, "Too Short!")
    //   .max(10, "Too Long!")
    //   .required(" password should be Required minmum 3 character"),
    // cityID: Yup.number().required("Required"),
    // roleID: Yup.number().required("Required"),
  });

  const { values, errors, handleBlur, touched, handleSubmit, handleChange } =
    useFormik({
      initialValues: initValues,
      validationSchema:  UserAddSchema,

      onSubmit: (values) => {},
    });

  // Toaster

  const notify = () => toast("Your Request Sending For Approval!");

  function renderusergetall() {
    let GetUserRow = [];
    GetUser?.map((item) =>
      GetUserRow.push(
        <tr>
          <td>{item.userName}</td>
          <td>{item.userAge}</td>
          <td>{item.userAddress}</td>
          <td>{item.userEmail}</td>
          <td>{item.city.cityName}</td>
          <td>{item.city.state.stateName}</td>
          <td>{item.city.state.country.countryName}</td>

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
          </td>
        </tr>
      )
    );
    return GetUserRow;
  }

  return (
    <div>
      <ToastContainer />
      <div className="col row">
        <div className="col-1">
          <button
            className="btn btn-info m-2 p-2"
            data-toggle="modal"
            data-target="#newModal"
          >
            Registration
          </button>
        </div>
      </div>

      <div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Address</th>
              <th>Email</th>
              <th>City</th>
              <th>State</th>
              <th>Country</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>{renderusergetall()}</tbody>
        </table>
      </div>

      {/* Save */}
      
      <form  onSubmit={handleSubmit}>
        <div className="modal" id="newModal" role="dialog">
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
                    //  onChange={AddChangeHandller}
                    // onChange={handleChange}
                     
                      onBlur={handleBlur}
                    //  value={values.userName}
                      value={values.userName}
                      // value={addep.departmentName}
                    /> 
                    <div className="text-danger" >
                    {errors.userName && touched.userName && errors.userName}
                    </div>
                  </div>

                  
                </div>

                <div className="form-group row">
                  <label htmlFor="numage" className="col-sm-4">
                    Age
                  </label>
                  {/* {errors.userAge && touched.userAge && errors.userAge} */}
                  <div className="col-sm-8">
                    <input
                      type="number"
                      id="numage"
                      placeholder="Enter Name"
                      name="userAge"
                      className="form-control"
                       onChange={AddChangeHandller}
                     // onChange={handleChange}
                      // value={addep.departmentName}
                   //   value={values.userAge}
                    //  onBlur={handleBlur}
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
    </div>
  );
};
