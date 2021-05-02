import { Component } from "react";
import API from "../utils/API";
import Table from "../components/Table";
import Row from "../components/Row";

class Employee extends Component {
  state = {
    search: "",
    employee: [],
    filter: [],
    sort: true,
    error: ""
  };
  headings = [
    { name: "First Name" },
    { name: "Age" }
  ]

  // let props = {firstName, lastName, phone, age, email}  

  // When the component mounts, get a list of all employees
  componentDidMount() {
    API.getRandomEmployees()
      .then(res => this.setState({ employee: res.data.results }))
    console.log(this.state.employee)

  }

  handleInputChange = event => {
    this.setState({ search: event.target.value });
    if (event.target.value === "First Name") {

    } if (event.target.value === "Age") {
      // this.state.dob.age.list(count++)
    }
  };

  sortHandler(heading) {
    if (this.state.order === false) {
      this.setState({
        order: true
      }
      )
    }
    else this.setState({
      order: false
    }
    )

    const makeAlphabetical = (a, b) => {

      if (this.state.order === false) {
        if (a[heading] === "First Name") {
          return a[heading].first.localeCompare(b[heading].first)

        } else if (a[heading] === "Age") {
          return a[heading].first.localeCompare(b[heading].first)
        }
      
      }
    }
    const sortedUsers = this.state.filter.sort(makeAlphabetical)
        this.setState({
          filter: sortedUsers
        })
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

            <div class="input-group mb-3">
              <span class="input-group-text" id="inputGroup-sizing-default">Search</span>
              <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
              </input>
            </div>

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