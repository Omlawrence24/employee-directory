import { Component } from "react";
import API from "../utils/API";
import Table from "../components/table/index"
class Employee extends Component {
  state = {
    search: "",
    employee: {},
    results: {},
    error: ""
  };


  

  // When the component mounts, get a list of all employees
  componentDidMount() {
    API.getRandomEmployees()
      .then(res => this.setState({ employee: res.results }))
    console.log(this.state.employee)
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    this.setState({ search: event.target.value });
    if (event.target.value === "Name") {
      //alphabetical order
    } if (event.target.value === "age") {
      // this.state.dob.age.list(count++)
    }
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.getRandomEmployees(this.state.search)
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ results: res.data.message, error: "" });
      })
      .catch(err => this.setState({ error: err.message }));
  };

  render() {
    return (
      <div>
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


              <div>

                <h1>Employee List</h1>

                {Employee.map(props => (

                  <Table
                    firstName={props.employee.name.first}
                    LastName={props.employee.name.last}
                    address={props.employee.dob.age}
                    phone={props.employee.phone}
                    email={props.employee.email}

                  />


                ))}

              </div>

            </table>

          </div>
        </div>
      </div>
    )
  }

};

export default Employee;
