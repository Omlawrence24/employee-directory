import { Component } from "react";
import API from "../utils/API";
import Table from "../components/Table";
import Row from "../components/Row";

class Employee extends Component {
  state = {
    search: "",
    employee: [],
    // results: [],
    error: ""
  };


  // let props = {firstName, lastName, phone, age, email}  

  // When the component mounts, get a list of all employees
  componentDidMount() {
    API.getRandomEmployees()
      .then(res => this.setState({ employee: res.data.results }))
    console.log(this.state.employee)

  }

  handleInputChange = event => {
    this.setState({ search: event.target.value });
    if (event.target.value === "Name") {
      
    } if (event.target.value === "age") {
      // this.state.dob.age.list(count++)
    }
  };

  makeAlphabetical (employee) {
  return employee.split('').sort('').trim('');
  
  }


  handleFormSubmit = event => {
    event.preventDefault();
    try {
      API.getRandomEmployees(this.state.search)
        .then(res => {
          if (res.data.status === "error") {
            throw new Error(res.data.message);
          }
          this.setState({ results: res.data.message, error: "" });
        })
    }
    catch (error) {
      this.setState({ error })
    }

  };

  render() {
    console.log(this.state.employee)
    return (
      <div>
        <h1> Employee List </h1>
       
        <div className="card text-center">
          <div className="card-header">
            <div>

              <Table>
              {this.state.employee.length > 0 && this.state.employee.map(data => (
                  <Row
                    firstName={data.name.first}
                    lastName={data.name.last}
                    age={data.dob.age}
                    phone={data.phone}
                    email={data.email}
                  />
                  ))}
                  </Table>
            </div>
          </div>
        </div>
      </div>
    )
  }

};

export default Employee;