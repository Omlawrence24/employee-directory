import React from "react";
import {Employee} from "../../pages/Employee";




// this component handles the employees table
function Table(props, Employee) {
  return (
  
      <table class="table table-bordered border-primary">
        <thead>
          <tr>
          <th scope="col">#</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Age</th>
            <th scope="col">Email</th>
          </tr>
        </thead>

        <tbody>
         {props.children}
        </tbody>

      </table>
  );
}

export default Table;
