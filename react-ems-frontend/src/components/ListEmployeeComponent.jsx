import React, { Component } from "react";
import EmployeeService from "../services/EmployeeService";


class ListEmployeeComponent extends Component {
    
  constructor(props) {
    super(props);

    this.state = {
        navigate: false,
      employees: []
    };
    this.addEmployee = this.addEmployee.bind(this);
    this.editEmployee = this.editEmployee.bind(this);
    this.deleteEmployee = this.deleteEmployee.bind(this);
  }

  deleteEmployee(id){
    EmployeeService.deleteEmployee(id).then( res => {
        this.setState({employees: this.state.employees.filter(employee => employee.id !== id)});
    });
  }

  editEmployee(id){
    this.props.history.push(`/update-employee/${id}`);
    window.location.reload(true);
}

  componentDidMount() {
    EmployeeService.getEmployees().then((res) => {
      this.setState({ employees: res.data });
    });
  }

  addEmployee() {
    
    this.props.history.push('/add-employee');
    window.location.reload(true);
  }

  viewEmployee(id){
    this.props.history.push(`/view-employee/${id}`);
    window.location.reload(true);
  }

  render() {
    return (
      <div>
        <div className= "row"><h2 className="text-center">Employees List</h2></div>
        
        <div className="row">
        <div className = "col-lg-3"> 
          <button
            className="btn btn-primary"
            onClick={this.addEmployee} >
            Add Employee
          </button>
          </div>
        </div>
        <br />
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th >Employee First Name</th>
                <th>Employee Last Name</th>
                <th>Employee Email ID</th>
                <th >Actions</th>
              </tr>
            </thead>

            <tbody >
              {this.state.employees.map((employee) => (
                <tr key={employee.id}>
                  <td className="align-middle">{employee.firstName}</td>
                  <td className="align-middle">{employee.lastName}</td>
                  <td className="align-middle">{employee.email}</td>
                  <td className="align-middle">
                    <button className="btn btn-info" onClick={() => this.editEmployee(employee.id)}>Update</button>
                    <button style={{marginLeft: "10px"}} onClick={ () => this.deleteEmployee(employee.id)} className="btn btn-danger">Delete</button>
                    <button style={{marginLeft: "10px"}} onClick={ () => this.viewEmployee(employee.id)} className="btn btn-warning">View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListEmployeeComponent;
