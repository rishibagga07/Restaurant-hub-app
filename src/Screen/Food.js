import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  FcAbout,
  FcAssistant,
  FcBusinessman,
  FcHome,
  FcReadingEbook,
} from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
//import logo from "../Screen/img/logo.gif";
import img from "../Screen/img/img.jpg";
import fff from "../Screen/img/fff.png";
import jwtInterceoptor from "./jwtInterceoptor";
//import foodhub from "../Screen/img/foodhub.jpg";
//import b from "../Screen/img/b.gif"

export const Us = () => {
  const [GetUser, SetGetUser] = useState();
  // const [GetCountry, SetGetCountry] = useState();
  // const [AddNewUser, SetAddNewUser] = useState();
  const [GetOrderbookingdata, SetGetOrderbookingdata] = useState({});
  const [Orderbooking, SetOrderbooking] = useState();
  const [GetAllFoodCategory, SetGetAllFoodCategory] = useState([]);
  const [GetFoodByCategoryID, SetGetFoodByCategoryID] = useState();
  const [StoreID , SetStoreID]= useState();
  const [ImageUrl , SetImageUrl]= useState();

  const [AddToCart , SetAddToCart] = useState();
  const [SendDataToCart , SetSendDataToCart] = useState();
 
  const NavigateToCartPage = useNavigate();
  const [RestaurantsDataGetByNavigation , SetRestaurantsDataGetByNavigation] = useState();
  const location = useLocation();

  
  let data ; 
  let imgurl ;
 // let userID
  const navigate = () => {
    NavigateToCartPage("/cart")
  }
  

  useEffect(() => {
    GetAllFood();
    GetAllFoodCategotyList();
    GetUserIDFromLocalStorages();
    //RestaurantsDataGetByNavigation and store it in local variable
  //  localStorage.setItem("restaurantsData", JSON.stringify(location.state?.item));
  RestaurantDataSetToLocalStorage();
    
    RestaurantDataGetFromLocalStorage();

  }, []);



  // restaurants data get  by navigation
  // const location = useLocation();
  // debugger
  // console.log("location", location.state?.item);
// let RestaurantsDataGetByNavigation = location.state?.item;
// const RestaurantsDataGetByNavigation = location.state?.item;
//   console.log("RestaurantsDataGetByNavigation", RestaurantsDataGetByNavigation);



const RestaurantDataSetToLocalStorage = () => {
debugger
  if (location.state?.item) {
  localStorage.setItem("restaurantsData", JSON.stringify(location.state.item));
  }
  
}

const RestaurantDataGetFromLocalStorage = () => {
  debugger;
  let data;
  const LS = JSON.parse(localStorage.getItem("restaurantsData"))
data = LS
console.log("data", data);    
SetRestaurantsDataGetByNavigation(data)

console.log("data" , data.restImage);
console.log("RestaurantsDataGetByNavigation" , RestaurantsDataGetByNavigation);
// const imageData = data.restImage;
// const blob = new Blob([imageData], { type: "image/jpeg" });
// const imageUrl = URL.createObjectURL(blob);
// console.log("imageUrl" , imageUrl);
// imgurl = imageUrl


const imageData = data.restImage;
  const imageUrls = `data:image/jpeg;base64,${imageData}`;
  console.log("imageUrl", imageUrls);
  SetImageUrl(imageUrls);
}


// const GetRestaurantDataFromLocalStorage = () => {
//   debugger
//   const storedData = localStorage.getItem("restaurantsData");
//   if (storedData) {
//     try {
//       const parsedData = JSON.parse(storedData);
//       SetRestaurantsDataGetByNavigation(parsedData);
//       console.log("RestaurantsDataGetByNavigation", parsedData);
//     } catch (error) {
//       console.error("Error parsing stored data:", error);
//     }
//   }
// };


  
  // const GetRestaurantDataFromLocalStorage = () => {
  //   debugger
  //   let RestaurantData
  //   const GetRestaurantLocalStorage = JSON.parse(localStorage.getItem("restaurantsData"));
  //   console.log("GetRestaurantLocalStorage", GetRestaurantLocalStorage);
  //   RestaurantData = GetRestaurantLocalStorage
  //   SetRestaurantsDataGetByNavigation(RestaurantData);
  //   console.log("RestaurantsDataGetByNavigation", RestaurantsDataGetByNavigation);
  // };



  // const  GetUserIDFromLocalStorages = () => {
  //   debugger
  //   let GetUserIDFromLocalStorage = JSON.parse(localStorage.getItem("currentUser")).userID;
  //   console.log("GetUserIDFromLocalStorage" , GetUserIDFromLocalStorage);
  //   userID = GetUserIDFromLocalStorage
  //   console.log("userID" , userID);
  //   SetStoreID(userID);
  //   console.log("StoreID" , StoreID);
    
  // }

  const GetUserIDFromLocalStorages = () => {
    debugger
    let userID;
    const GetUserIDFromLocalStorage = JSON.parse(localStorage.getItem("currentUser")).userID;
    console.log("GetUserIDFromLocalStorage", GetUserIDFromLocalStorage);
    userID = GetUserIDFromLocalStorage;
    console.log("userID", userID);
    SetStoreID(userID);
    console.log("StoreID", StoreID);
  };
  


// ,{ headers: {Authorization : `Bearer ${token}`} }
  const GetAllFoodCategotyList = () => {
   // let token = JSON.parse(localStorage.getItem('currentUser')).token;
    debugger
    //console.log("token-info", tokensData);
    //alert("tokensData")
    jwtInterceoptor
      .get("https://localhost:7089/api/Food/GetAllFoodsCategory")
      .then((res) => {
        // axios.get("https://localhost:7138/api/users").then((res)=>{
        SetGetAllFoodCategory(res.data);
        console.log("GetAllFoodCategory", res.data);
      })
      .catch((e) => {
        alert("Wrong With API");
      });
  };

  
 






// get all food
  const GetAllFood = () => {
   debugger
    jwtInterceoptor
      .get("https://localhost:7089/api/Food/GetAllFoods")
      .then((res) => {
        // axios.get("https://localhost:7138/api/users").then((res)=>{
        SetGetUser(res.data);
        console.log("GetUser", res.data);
       
      })
      .catch((e) => {
        alert("Wrong With GetAllFood API");
      });
  };

  const GetDataOnModal = (item) => {
    debugger
    SetGetOrderbookingdata(item);
    data = item

    SetAddToCart(data);

  };



  // Qunatity change handler
  const TakeOrderQuantityChangeHandler = (event) => {
debugger

    let quantity = event.target.value;

    console.log("Orderbooking", quantity);
 
    
    SetOrderbooking(quantity);
    console.log("quantity",quantity);
    

    let q = quantity;

    // const obj = {
    //   foodName : AddToCart.foodName,
    //   OrderBookingQuantity : q , 
    //   restaurantID :  RestaurantsDataGetByNavigation.restID,
    //   foodImage : AddToCart.foodImage,
    //   foodPrice : AddToCart.foodPrice * q
    // }

// GetOrderbookingdata

    // const obj = {
    //   customerOrderProductName : AddToCart.foodName,
    //   customerOrderQuantity : q , 
    //   restaurantID :  RestaurantsDataGetByNavigation.restID,
    //   foodImage : AddToCart.foodImage,
    //   customerOrderPrice : AddToCart.foodPrice ,
    //   customerOrderTotal : AddToCart.foodPrice * q,
    //   userID : userID
    // }


    const obj = {
      customerOrderProductName : GetOrderbookingdata.foodName,
      customerOrderQuantity : q , 
      restID :   RestaurantsDataGetByNavigation?.restID,
      foodImage : GetOrderbookingdata.foodImage,
      customerOrderPrice : GetOrderbookingdata.foodPrice ,
      customerOrderTotal : GetOrderbookingdata.foodPrice * q,
      userID : 5
    }
debugger
    console.log("obj", obj);
 
    SetSendDataToCart(obj)
    console.log("SendDataToCart" , SendDataToCart);
};
  
  const HandleGetFoodByCategoryID = (e) => {
    // SetSelectedStateId(null);
    debugger;
    const foodCategoryID = e.target.value;
    // setSelectedCountryId(countryid);
    console.log("countryid", foodCategoryID);

    debugger;
    jwtInterceoptor
      .get(
        "https://localhost:7089/api/Food/GetFoodByFoodCategoryID/" +
          foodCategoryID
      )
      .then((res) => {
        debugger;
        SetGetFoodByCategoryID(res.data);
        console.log("res.data", res.data);
      })
      .catch((e) => {
        alert("Wrong With HandleGetFoodByCategoryID API ");
      });
  };




  


const AddCustomerOrder = () => {

debugger

  const obj = {
    customerOrderProductName : SendDataToCart.customerOrderProductName,
    customerOrderQuantity : SendDataToCart.customerOrderQuantity , 
    restID : RestaurantsDataGetByNavigation?.restID,
    customerOrderFoodImage : SendDataToCart.foodImage,
    customerOrderPrice : SendDataToCart.customerOrderPrice ,
    customerOrderTotal : SendDataToCart.customerOrderTotal ,
    userID : StoreID
  }


  console.log("obj" , obj);

  debugger
  console.log("SendDataToCart" , SendDataToCart);

    axios.post("https://localhost:7089/api/CustomerOrder/AddNewCustomerOrder", obj).then((res)=> {
     
    }).catch((e)=> {
        alert("Wrong With AddCustomerOrder API");
    })
    navigate();
}



// const AddCustomerChangeHandller = (event) => {
//   debugger
//     SetAddNewCustomerOrder({ ...AddNewCustomerOrder, [event.target.name]: event.target.value });
//     console.log("AddNewCustomerOrder",  AddNewCustomerOrder);
//   };




  

  return (
    <div>
      <div style={{ position: "relative" }}>
        <nav
          style={{
            position: "absolute",
            top: 10,
            left: 0,
            width: "100%",
            textAlign: "left",
          }}
        >
          <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
            <li style={{ display: "inline-block", margin: "0 10px" }}>
            <Link to="/backgroundimg" ><FcHome size={"50"} /></Link>
            </li>
            {/* <li style={{ display: "inline-block", margin: "0 10px" }}>
              <a href="#" className="text-white">
                <FcAbout size={"50"} />
              </a>
            </li> */}
            <li style={{ display: "inline-block", margin: "0 10px" }}>
              <a href="#food" className="text-white">
                <FcReadingEbook size={"50"} />
              </a>
            </li>
            {/* <li style={{ display: "inline-block", margin: "0 10px" }}>
              <a href="#" className="text-white">
                <FcAssistant size={"50"} />
              </a>
            </li> */}

            {/* <li
              style={{ display: "inline-block", margin: "0 10px" }}
              data-toggle="modal"
              data-target="#newModall"
            >
              <a href="#" className="text-white">
                <FcBusinessman size={"50"} />
              </a>
            </li> */}

            {/* <li
              style={{ display: "inline-block", margin: "0 10px" }}
              className="nav-item"
            >
              <Link to="/userApproval" className="nav-link text-white ">
                UserApproval
              </Link>
            </li> */}

            {/* <li
              style={{ display: "inline-block", margin: "0 10px" }}
              className="nav-item"
            >
              <Link to="/restaurant" className="nav-link text-white ">
                {" "}
                Restaurant Registration
              </Link>
            </li> */}
          </ul>
        </nav>

        {/* background img */}



        {/* <img
                src={`data:image/jpg;base64, ${item.foodImage} `}
                height="250"
                width="400"
              /> */}


        <div
          style={{
           // backgroundImage: `url(${img})`,
           backgroundImage: `url(${ImageUrl})`,
         //  backgroundImage: `url('data:image/jpeg;base64,${RestaurantsDataGetByNavigation.foodImage}')`,
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
              Welcome To {RestaurantsDataGetByNavigation?.restName}
            </h1>

            {/* <button className="btn btn-secondary" style={{ marginTop: "20px" }}>
              Login
            </button> */}

            <div>
              <div className="form-group row m-3 p-3 ">
                <label htmlFor="textcity" className="text-secondry">
                  select Your Food
                </label>

                <div className="col-sm-8">
                  <select
                    id="textcity"
                    //placeholder="Enter RoleId"
                    name="cityID"
                    className="form-control"
                    onChange={HandleGetFoodByCategoryID}
                    //value={adduser.roleId}
                  >
                    <option>-----Select Your Food Category-----</option>
                    {GetAllFoodCategory?.map((x) => {
                      return (
                        <option value={x.foodCategoryID}>
                          {x.foodCategoryName}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {GetFoodByCategoryID ? (
        <div>
          {GetFoodByCategoryID?.map((item) => (
            <div key={item.foodID} className="hero">
              <img
                src={`data:image/jpg;base64, ${item.foodImage} `}
                height="250"
                width="400"
              />
              <div className="hero-description-bk"></div>

              {/* <div class="hero-logo">
              <img src={fff} />
            </div> */}

              <div className="hero-description">
                <p>{item.foodName}</p>
              </div>
              <div className="hero-date">
                <p>&#8377;{item.foodPrice}</p>
                {/* <p>{item.foodCategory.foodCategoryName}</p> */}
              </div>
              <div className="hero-btn">
                <button
                  className="btn btn-info"
                  data-toggle="modal"
                  data-target="#editModal"
                  onClick={() => GetDataOnModal(item)}
                >
                  Order
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>
          {GetUser?.map((item) => (
            <div key={item.foodID} className="hero">
              <img
                src={`data:image/jpg;base64, ${item.foodImage} `}
                height="250"
                width="400"
              />
              <div className="hero-description-bk"></div>

              {/* <div class="hero-logo">
              <img src={fhhlogo} />
            </div> */}

              <div className="hero-description">
                <p>{item.foodName}</p>
              </div>
              <div className="hero-date">
                <p>&#8377;{item.foodPrice}</p>
                <p>{item.foodCategory.foodCategoryName}</p>
              </div>
              <div className="hero-btn">
                <button
                  className="btn btn-info"
                  data-toggle="modal"
                  data-target="#editModal"
                  onClick={() => GetDataOnModal(item)}
                >
                  Order
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/*EDIT*/}

      <form>
        <div className="modal" id="editModal" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              {/* Header */}
              <div className="modal-header">
                <div className="model-title">New Order</div>
                <button className="close" data-dismiss="modal">
                  <span>&times;</span>
                </button>
              </div>

              {/* Body */}

              <div className="modal-body">
                <div className="form-group row">
                  <label htmlFor="textname" className="col-sm-4">
                    Food Name
                  </label>

                  <div className="col-sm-8">
                    <input
                      type="text"
                      id="textname"
                      placeholder="Enter Ticket Name"
                      name="customerOrderProductName"
                      className="form-control"
                      //onChange={AddCustomerChangeHandller}
                      value={GetOrderbookingdata.foodName}
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <label htmlFor="textticketscount" className="col-sm-4">
                    Food Quantity
                  </label>

                  <div className="col-sm-8">
                    <input
                      type="number"
                      id="textticketscount"
                      placeholder="Enter Quantity"
                      name="customerOrderQuantity"
                      className="form-control"
                      onChange={TakeOrderQuantityChangeHandler}
                      // value={1}
                    ></input>
                  </div>
                </div>

                <div className="form-group row">
                  <label htmlFor="ticketimg" className="col-sm-4">
                    Poster
                  </label>

                  <div className="col-sm-8">
                    {" "}
                    <img
                      src={`data:image/jpg;base64, ${GetOrderbookingdata.foodImage} `}
                      height="100"
                      width="100"
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <label htmlFor="textticketscount" className="col-sm-4">
                    Food Price
                  </label>

                  <div
                    className="col-sm-8"
                    type="number"
                    id="textticketscount"
                    placeholder="Enter Tickets"
                    name="customerOrderPrice"
                  // onChange={AddCustomerChangeHandller}
                    value={GetOrderbookingdata.foodPrice}
                  >

{/* <h2>&#8377; { foodpriceXwithQuantity }</h2> */}

                    <h2  ame="customerOrderTotal">
                      &#8377;{" "}
                      {Orderbooking
                        ? Orderbooking * GetOrderbookingdata.foodPrice
                        : GetOrderbookingdata.foodPrice}{" "}
                    </h2>

                  </div>
                </div>

                {/* <div className="form-group row">
                  <label for="textticketscount" className="col-sm-4">
                    Food Price
                  </label>

                  <div
                    className="col-sm-8"
                    type="number"
                    id="textticketscount"
                    placeholder="Enter Tickets"
                    name="orderBookingAmount"
                    onChange={PriceChangeHandler}
                    value={GetOrderbookingdata.foodPrice}
                  >
                    <h2>
                      {" "}
                      &#8377;{" "}
                      {Orderbooking
                        ? Orderbooking * GetOrderbookingdata.foodPrice
                        : GetOrderbookingdata.foodPrice}{" "}
                    </h2>
                  </div>
                </div> */}

                {/* footer */}



                {/* <Link to="/restaurant" className="nav-link text-white ">
                {" "}
                Restaurant Registration
              </Link> */}



                <div className="modal-footer">
                  
                  <button
                    className="btn btn-primary" //  //     onClick={() => NavigateToBookingPage(SendDataToCart)}
                    onClick={AddCustomerOrder}
                    data-dismiss="modal"
                  >
                    Add To Cart
                  </button>
                 
                  <button data-dismiss="modal" className="btn btn-danger">Cancel</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
