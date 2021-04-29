import React from "react";
// import Employee from "./pages/Employee";
import Table from "./components/table/index";


function App() {
  return (

    <div>

      <h1>Employee List</h1>

      {this.state.friends.map(employee => (

        <Table
          firstName={employee.name.first}
          LastName={employee.name.last}
          address={employee.dob.age}
          phone={employee.phone}
          email={employee.email}

        />


      ))}

    </div>

  );
}



export default App;
