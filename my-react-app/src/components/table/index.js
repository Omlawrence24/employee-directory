import React from "react";
// import Employee from "../../pages/Employee"
function Table (props) {
    return (
      <div className="card text-center">
        <div className="card-header">
         
      <table class="table">
        <thead>
          <tr>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Age</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
       
        <tbody>
          <tr>
            <td>{props.firstName}</td>
            <td>{props.lastName}</td>
            <td>{props.age}</td>
            <td>{props.phone}</td>
            <td>{props.email}</td>

          </tr>
        </tbody>
        
      </table>

        </div>
        <div className="card-body">{props.children}</div>
      </div>
    );
  }
  
  export default Table;
  