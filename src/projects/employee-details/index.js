import React from "react";
import AddEmployee from "./AddEmployee";
// import DisplayEmployees from './display-employees'

const EmployeeDetails = () => {
  /** get it from request and save it in state */
  let employeeDetails = [
    { name: "Shubham", isPromoted: true, salary: 100 },
    { name: "Arora", isPromoted: false, salary: 150 },
    { name: "Sh", isPromoted: true, salary: 200 },
    { name: "AB", isPromoted: false, salary: 250 }
  ];

  // const noOfPromoted = state.filter(item => item.isPromoted).length;
  // let salaries = state.map(item => item.salary);
  // let totalSalary = salaries.reduce(
  //   (accumulator, currentValue) => accumulator + currentValue
  // );

  return (
    <div className="row">
      <AddEmployee />

      <DisplayEmployees employeeDetails={employeeDetails} />
    </div>
  );
};

const DisplayEmployees = props => {
  const { employeeDetails } = props;

  return <div className="col-sm">{employeeDetails.map(item => item.name)}</div>;
};

export default EmployeeDetails;
