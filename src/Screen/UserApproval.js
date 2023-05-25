import axios from 'axios';
import React, { useEffect, useState } from 'react'


export const UserApproval = () => {
    const [GetUser, SetGetUser] = useState();

    useEffect(() => {
        GetAllUser();
      //  GetAllCountry();
      }, []);


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


      const RequestApprovedByAdmin = (userID ,approvalID ) => {
        debugger;
        console.log("event", userID ,approvalID);
        const obj = {
            userID: userID,
            approvalID : approvalID
        }
        axios.patch("https://localhost:7089/api/users/UserApprovedByAdminn" , obj).then((res)=> {
            GetAllUser();

        }).catch((e)=> {
            alert("Wrong With RequestApprovedByAdmin API");
        });
      }


  

      function renderusergetall() {
        debugger;
        let GetUserRow = [];
        GetUser?.map((item) =>
          GetUserRow.push(
            <tr key={item.userID}>
              <td>{item.userName}</td>
              <td>{item.userAge}</td>
              <td>{item.userAddress}</td>
              <td>{item.userEmail}</td>
              <td>{item.city.cityName}</td>
              <td>{item.city.state.stateName}</td>
              <td>{item.city.state.country.countryName}</td>
              {item.approvalID? <td>{item.approvalID}</td> : "Approval Is Pending..."}
              
    
              <td>
                <button
                  className="btn btn-info p-2 m-1 "
               //   data-toggle="modal"
               //   data-target="#editModal"
                  onClick={() => RequestApprovedByAdmin(item.userID , 1)}
                >
                  Approved
                </button>
                <button
                  className="btn btn-danger p-2 m-1 " 
                  onClick={() => RequestApprovedByAdmin(item.userID , 2)} 
                >
                  Disapproved
                </button>


                <button
                  className="btn btn-dark p-2 m-1 "
                  onClick={() => RequestApprovedByAdmin(item.userID , 3)}
                >
                  Block
                </button>
              </td>
            </tr>
          )
        );
        return GetUserRow;
      }

      



  return (
    <div>


<div>
    <h2 className='text text-info' >Approval List</h2>
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
              <th>Approval</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>{renderusergetall()}</tbody>
        </table>
      </div>






     

    </div>




  )
}

