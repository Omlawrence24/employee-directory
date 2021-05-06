import React from "react";
//import {Employee} from "../../pages/Employee";




// this component handles the employees table
function Table(props) {
  return (
  <div>
      <table class="table table-bordered border-primary">
        <thead>
          <tr>
         
            <th 
           onClick ={ ()=>{props.sortHandler('First Name')}}
            scope="col">
              First Name</th>
            <th scope="col"> Last Name</th>
            <th scope="col">Phone Number</th>
            <th onClick ={ ()=>{props.sortHandler('Age')}}
             scope="col">
               Age</th>
            <th scope="col">Email</th>
          </tr>
        </thead>

        <tbody>
         {props.children}
        </tbody>

      </table>
      </div>
  )

 };

export default Table;    