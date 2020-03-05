import React from "react";

const Project = () => {
  let state = [
    { name: "Shubham", isPromoted: true, salary: 100 },
    { name: "Arora", isPromoted: false, salary: 150 },
    { name: "Sh", isPromoted: true, salary: 200 },
    { name: "AB", isPromoted: false, salary: 250 }
  ];

  const noOfPromoted = state.filter(item => item.isPromoted).length;
  let salaries = state.map(item => item.salary);
  let totalSalary = salaries.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );

  const tbodyContentHTML = () => {
    if (state.length === 0) {
      return "no records found";
    }

    let isChecked = false;
    return state.map(({ name, salary, isPromoted = false }, i) => {
      isChecked = isPromoted;
      return `
           <tr>
               <th>${name}</th> 
<th>${salary}</th> 
               <td><input type="checkbox" onClick = {handleChange(${i})}
{isChecked === true ? "checked" : ""}></td>
           </tr>
      `;
    });
  };

  const template = (
    <>
      <table className="table">
        <caption>Employee Promotion details.</caption>
        <thead>
          <tr>
            <th>Employee Name</th>
            <th>Salary</th>
            <th>Promoted (y/n)</th>
          </tr>
        </thead>
        <tbody>{tbodyContentHTML()}</tbody>
      </table>
    </>
  );

  return (
    <div>
      <div className="alert alert-info">
        {noOfPromoted} are promoted out of {state.length}
      </div>

      {template}

      <p>Total salary: {totalSalary}</p>
    </div>
  );
};

function Projects() {
  return <Project className="Projects" />;
}

export default Projects;
