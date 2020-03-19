import React from "react";
import "./styles.css";
// import EmployeeDetails from ".";

const AddEmployee = props => {
  const { employeeDetails, setEmpDetails } = props;

  const handleEmployeInput = ({ target }) => {
    console.log(target.value);
    const { name, value } = target;
    // const { employee } = this.state;
    // this.setState({
    //   employee: { ...employee, [name]: value }
    // });
    // setEmpDetails([...employeeDetails, ...{ [name]: value }]);
  };

  const addEmployee = () => {
    console.log("addEmployee");

    // this.setState({
    //      employees: [...this.state.employees, this.state.employee]
    // })
    // setEmpDetails([...employeeDetails, ...{ [name]: value }]);
  };

  const deleteEmployees = () => {
    console.log("addEmployee");

    // const {employees} = this.state
    // this.setState({
    //     employees: [...employees.filter(employee => !employee.isPromoted)]
    // })

    // state = state.filter(item => !item.isPromoted);
  };

  return (
    <div className="col-md">
      <div>
        <form>
          <div className="form-group">
            <label htmlFor="name">Add an Employee</label>
            <input
              type="text"
              className="form-control"
              onChange={e => handleEmployeInput(e)}
              name="name"
              placeholder="Employee Name"
            />
            <br />
            <label htmlFor="salary">Enter salary</label>
            <input
              type="text"
              className="form-control"
              onChange={e => handleEmployeInput(e)}
              name="salary"
              placeholder="Employee Salary"
            />
          </div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={e => addEmployee(e)}
          >
            Submit
          </button>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <button
            type="button"
            className="btn btn-danger"
            onClick={e => deleteEmployees(e)}
          >
            Delete Selected Folks
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddEmployee;
