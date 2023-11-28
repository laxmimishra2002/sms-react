import React, { Component } from "react";
import TutorialDataService from "../services/tutorial.service";
import { Link } from "react-router-dom";
import UpdateTutorial from './update-tutorial.component'
import App from "../App";

export default class TutorialsList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.retrieveTutorials = this.retrieveTutorials.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveTutorial = this.setActiveTutorial.bind(this);
    this.removeAllTutorials = this.removeAllTutorials.bind(this);
    this.searchTitle = this.searchTitle.bind(this);
    console.log('in list constructor');
    this.state = {
      tutorials: [],
      currentTutorial: null,
      currentIndex: -1,
      searchTitle: "",
    };
  }

  componentDidMount() {
    this.retrieveTutorials();
  }

  onChangeSearchTitle(e) {
    const searchTitle = e.target.value;

    this.setState({
      searchTitle: searchTitle,
    });
  }

  retrieveTutorials() {
    TutorialDataService.getAll()
      .then((response) => {
        this.setState({
          tutorials: response.data,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveTutorials();
    this.setState({
      currentTutorial: null,
      currentIndex: -1,
    });
  }

  setActiveTutorial(tutorial, index) {
    this.setState({
      currentTutorial: tutorial,
      currentIndex: index,
    });
  }

  deleteRecord(record, index) {
    // alert(record.studentid);
    TutorialDataService.delete(record.studentid).then((response) => {
      alert(
        "Record has been deleted successfully",
        "Student Name  ",
        response.studentname,
        "Student Id ",
        response.studentid
      );
      this.refreshList();
    });
  }
  updateRecord(tutorial, index) {
  //   <Link
  //    to={"/student/update/" + tutorial.studentid}  props={}
  //  className="nav-link" 
  // ></Link>;
   
        console.log(tutorial);
         new App(tutorial);
        new UpdateTutorial(tutorial);
        new App(tutorial);
       
      
      
  

    
  }
  removeAllTutorials() {
    TutorialDataService.deleteAll()
      .then((response) => {
        console.log(response.data);
        this.refreshList();
      })
      .catch((e) => {
        console.log(e);
      });
  }

  searchTitle() {
    this.setState({
      currentTutorial: null,
      currentIndex: -1,
    });

    TutorialDataService.findByTitle(this.state.searchTitle)
      .then((response) => {
        this.setState({
          tutorials: response.data,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    const { searchTitle, tutorials, currentTutorial, currentIndex } =
      this.state;

    return (
      <div className="list row">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by Student Id"
              value={searchTitle}
              onChange={this.onChangeSearchTitle}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.searchTitle}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h4>Student List</h4>

          <ul className="list-group">
            {tutorials &&
              tutorials.map((tutorial, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveTutorial(tutorial, index)}
                  key={index}
                >
                  {tutorial.studentname}

                  <div onClick={() => this.deleteRecord(tutorial, index)}>
                    <img
                      src="Delete.svg"
                      height={"25px"}
                      width={"25px"}
                      style={{ float: "right" }}
                    ></img>
                  </div>
                  <div onClick={() => this.updateRecord(tutorial, index)}>
                    <img
                      src="Update.png"
                      height={"25px"}
                      width={"25px"}
                      style={{ float: "right" }}
                    ></img>
                  </div>
                </li>
              ))}
          </ul>

          <button
            className="m-3 btn btn-sm btn-danger"
            onClick={this.removeAllTutorials}
          >
            Remove All
          </button>
        </div>
        <div className="col-md-6">
          {currentTutorial ? (
            <div>
              <h4>StudentDetails</h4>
              <div>
                <label>
                  <strong>Student Name:</strong>
                </label>{" "}
                {currentTutorial.studentname}
              </div>
              <div>
                <label>
                  <strong>Father Name:</strong>
                </label>{" "}
                {currentTutorial.father_name}
              </div>
              <div>
                <label>
                  <strong>Mother Name:</strong>
                </label>{" "}
                {currentTutorial.mother_name}
              </div>
              <div>
                <label>
                  <strong>StudentId:</strong>
                </label>{" "}
                {currentTutorial.studentid}
              </div>
              <div>
                <label>
                  <strong>dob:</strong>
                </label>{" "}
                {currentTutorial.dob}
              </div>
              <div>
                <label>
                  <strong>Phone no:</strong>
                </label>{" "}
                {currentTutorial.phone_no}
              </div>
              <div>
                <label>
                  <strong>email id:</strong>
                </label>{" "}
                {currentTutorial.email}
              </div>
              <div>
                <label>
                  <strong>Gender:</strong>
                </label>
                {"xx "}
                {currentTutorial.gender}
              </div>
              <div>
                <label>
                  <strong>blood_group:</strong>
                </label>{" "}
                {currentTutorial.blood_group}
              </div>
              <div>
                <label>
                  <strong>Password:</strong>
                </label>{" "}
                {currentTutorial.password}
              </div>
              <div>
                <label>
                  <strong>Address:</strong>
                </label>{" "}
                {currentTutorial.address}
              </div>

              <div>
                <label>
                  <strong>Department:</strong>
                </label>{" "}
                {currentTutorial.department}
              </div>
              <div>
                <label>
                  <strong>Course:</strong>
                </label>{" "}
                {currentTutorial.course}
              </div>

              <Link
                to={{
                  pathname: "/student/update/" + currentTutorial.studentid,
                }}
                className="badge badge-warning" props={currentTutorial}
              >
                Edit
              </Link>
            </div>
          ) : (
            <div>
              <br />
              <p>Please click to select student.</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}
