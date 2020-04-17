import React from "react";
// import EmployeeDetails from "./employee-details";
import projectsInfo from "./projectsInfo.json";

const ProjectTile = ({ item }) => {
  return (
    <div className="card">
      <img
        src="https://i.pinimg.com/originals/ce/87/be/ce87bec6960894a07cff91a3a4a7615e.png"
        class="card-img-top"
        alt={item.name}
      />
      <div className="card-body">
        <h2 className="card-title">{item.name}</h2>
        <p className="card-text"> {item.description} </p>
        <a
          href="https://samtopper.github.io/Hyderabad-Famous-locations-info/"
          class="btn btn-primary"
        >
          Check it out!
        </a>
      </div>
    </div>
  );
};

function Projects() {
  // return <EmployeeDetails className="Projects" />;
  return (
    <div>
      {projectsInfo.map(item => (
        <ProjectTile item={item} />
      ))}
    </div>
  );
}

export default Projects;
