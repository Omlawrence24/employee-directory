import { Component } from "react";
import API from "../utils/API";

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

              {Employee.map(props => (
                <tbody>
                  <tr>

                    <td>{props.firstName}</td>
                    <td>{props.lastName}</td>
                    <td>{props.age}</td>
                    <td>{props.phone}</td>
                    <td>{props.email}</td>

                  </tr>
                </tbody>
              ))};

    </table>
     )
   </div>
        </div>
      </div>
    )

  };

  export default Employee;
