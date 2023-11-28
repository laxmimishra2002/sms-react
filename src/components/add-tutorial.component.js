import React, { Component } from "react";
import TutorialDataService from "../services/tutorial.service";

export default class AddTutorial extends Component {
  constructor(props) {
    super(props);

    this.onChangeStudentName = this.onChangeStudentName.bind(this);
    this.onChangeFatherName = this.onChangeFatherName.bind(this);
    this.onChangeMotherName = this.onChangeMotherName.bind(this);
    this.onChangePhoneno = this.onChangePhoneno.bind(this);
    this.onChangedateofbirth = this.onChangedateofbirth.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeGender = this.onChangeGender.bind(this);
    this.onChangeblood_group = this.onChangeblood_group.bind(this);
    this.onChangepassword = this.onChangepassword.bind(this);
    this.onChangeaddress = this.onChangeaddress.bind(this);
    this.onChangedepartment = this.onChangedepartment.bind(this);

    this.state = {
      studentname: "",
      father_name: "",
      mother_name: "",
      dob: "",
      phone_no: "",
      email: "",
      gender: "",
      blood_group: "",
      password: "",
      address: "",
      department: "",

      published: false,

      submitted: false,
    };
  }

  onChangeStudentName(e) {
    this.setState({
      studentname: e.target.value,
    });
  }
  onChangeFatherName(e) {
    this.setState({
      father_name: e.target.value,
    });
  }

  onChangeMotherName(e) {
    this.setState({
      mother_name: e.target.value,
    });
  }
  onChangePhoneno(e) {
    this.setState({
      phone_no: e.target.value,
    });
  }
  onChangedateofbirth(e) {
    this.setState({
      dob: e.target.value,
    });
  }
  onChangeEmail(e) {
    this.setState({
      email:e.target.value,
    });
    
  }
  onChangeGender(e) {
    this.setState({
      gender:e.target.value,

    });
    
  }

  onChangeblood_group(e) {
    this.setState({
      blood_group:e.target.value,
      

    });
  }
  onChangepassword(e) {
    this.setState({
      password:e.target.value,
    });
  }
  onChangeaddress(e) {
    this.setState({
      address:e.target.value,
    });
  }
  onChangedepartment(e) {
    this.setState({
      department:e.target.value,
    });
  }
  saveTutorial() {
    var data = {
      title: this.state.title,
      description: this.state.description,
    };

    TutorialDataService.create(data)
      .then((response) => {
        this.setState({
          id: response.data.id,
          title: response.data.title,
          description: response.data.description,
          published: response.data.published,

          submitted: true,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  newTutorial() {
    this.setState({
      id: null,
      title: "",
      description: "",
      published: false,

      submitted: false,
    });
  }

  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newTutorial}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="studentname">Student Name</label>
              <input
                type="text"
                className="form-control"
                id="studentname"
                required
                value={this.state.studentname}
                onChange={this.onChangeStudentName}
                name="studentname"
              />

              <label htmlFor="father_name">Father's Name</label>

              <input
                type="text"
                className="form-control"
                id="father_name"
                required
                value={this.state.father_name}
                onChange={this.onChangeFatherName}
                name="father_name"
              />
              <label htmlFor="mother_name">Mother's Name</label>

              <input
                type="text"
                className="form-control"
                id="mother_name"
                required
                value={this.state.mother_name}
                onChange={this.onChangeMotherName}
                name="mother_name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone_no">Contact no.</label>
              <input
                type="text"
                className="form-control"
                id="phone_no"
                required
                value={this.state.phone_no}
                onChange={this.onChangePhoneno}
                name="phone_no"
              />
            </div>
            <div>
              <div className="form-group">
                <label htmlFor="dob">date_of_Birth</label>
                <input
                  type="text"
                  className="form-control"
                  id="dob"
                  required
                  value={this.state.dob}
                  onChange={this.onChangedateofbirth}
                  name="dob"
                />
                <div className="form-group">
                  <label htmlFor="email">emailId</label>
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    required
                    value={this.state.email}
                    onChange={this.onChangeEmail}
                    name="email"
                  />
                  <div className="form-group">
                    <label htmlFor="gender">Gender</label>
                    <input
                      type="text"
                      className="form-control"
                      id="gender"
                      required
                      value={this.state.gender}
                      onChange={this.onChangeGender}
                      name="gender"
                    />

                    <div className="form-group">
                      <label htmlFor="blood_group">Blood_Group</label>
                      <input
                        type="text"
                        className="form-control"
                        id="gender"
                        required
                        value={this.state.blood_group}
                        onChange={this.onChangeblood_group}
                        name="blood_group"
                      />

                      <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                          type="text"
                          className="form-control"
                          id="password"
                          required
                          value={this.state.password}
                          onChange={this.onChangepassword}
                          name="password"
                        />
                        <div className="form-group">
                          <label htmlFor="address">Address</label>
                          <input
                            type="text"
                            className="form-control"
                            id="address"
                            required
                            value={this.state.address}
                            onChange={this.onChangeaddress}
                            name="address"
                          />
                          <div className="form-group">
                            <label htmlFor="department">Department</label>
                            <input
                              type="text"
                              className="form-control"
                              id="department"
                              required
                              value={this.state.department}
                              onChange={this.onChangedepartment}
                              name="department"
                            />

                            <button
                              onClick={this.saveTutorial}
                              className="btn btn-success"
                            >
                              Submit
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
