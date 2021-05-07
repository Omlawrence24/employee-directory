import { Component } from "react";
import API from "../utils/API";
import Table from "../components/Table";
import Row from "../components/Row";
class Employee extends Component {
  state = {
    search: "",
    employee: [],
    filter: [],
    sort: "desc",
    error: "",
  };
  headings = [{ name: "First Name" }, { name: "Age" }];
  // let props = {firstName, lastName, phone, age, email}
  // When the component mounts, get a list of all employees
  componentDidMount() {
    API.getRandomEmployees().then((res) =>
      this.setState({ employee: res.data.results })
    );
    console.log(this.state.employee);
  }
  handleSort = (event) => {
    console.log("sort by name");
    this.sortEmployees();
  };
  sortEmployees = () => {
    let employee = this.state.employee;
    employee.sort(function (a, b) {
      return a.name.first > b.name.first ? 1 : -1;
    });
    return this.setState({
      employee: employee,
    });
  };
  handleFormSubmit = (event) => {
    event.preventDefault();
    try {
      API.getRandomEmployees(this.state.search).then((res) => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ results: res.data.message, error: "" });
      });
    } catch (error) {
      this.setState({ error });
    }
  };
  render() {
    return (
      <div>
        <h1> Employee List </h1>
        <div class="input-group mb-3">
          <span class="input-group-text" id="inputGroup-sizing-default">
            Search
          </span>
          <input
            type="text"
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
          ></input>
        </div>
        <div className="card text-center">
          <div className="card-header">
            <div>
              <Table handleSort={this.handleSort}>
                {this.state.employee.length > 0 &&
                  this.state.employee.map((data) => (
                    <Row
                      employees={this.filter}
                      firstName={data.name.first}
                      lastName={data.name.last}
                      age={data.dob.age}
                      phone={data.phone}
                      email={data.email}
                      sortHandler={this.sortHandler}
                    />
                  ))}
              </Table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Employee;