import React, { Component } from "react";
import {addPerson, getPersons, updatePerson } from "./client";

class AddPerson extends Component {
  constructor(props) {
    super(props);
    const { first_name, last_name, dob, location } = props.person || {};
    this.state = {
      first_name: first_name || "",
      last_name: last_name || "",
      dob: dob || "",
      location: location || ""
    };
  }

  get isSubmitDisabled() {
    const state = this.state;
    return !Object.keys(state).every(prop => {
      return !!state[prop].trim();
    });
  }

  handleChangeFirstName(e) {
    this.setState({
      first_name: e.target.value
    });
  }

  handleChangeLastName(e) {
    this.setState({
      last_name: e.target.value
    });
  }

  handleChangeDOB(e) {
    this.setState({
      dob: e.target.value
    });
  }

  handleChangeLocation(e) {
    this.setState({
      location: e.target.value
    });
  }

  addPerson(person) {
    addPerson(person).then(({ data: person }) => {
      this.props.addPerson(person);
      this.setState({
        first_name: "",
        last_name: "",
        dob: "",
        location: ""
      });
    });
  }

  getPersons() {
    getPersons().then(({ data: persons }) => {
      this.props.getPersons();
      this.setState({
        firstName: "",
        lastName: "",
        dob: "",
        location: ""
      });
    });
  }

  updatePerson(person, id) {
    updatePerson(person, id).then(({data: person}) => {
      this.props.updatePerson(person, id);
    });

  }

  onSubmit = (e) => {
    e.preventDefault();
    // debugger;
    // console.log(this.props)
    const { first_name, last_name, dob, location } = this.state;
    const person = { first_name, last_name, dob, location};
    const {id} = this.props.person || '';
    if (id) {
      this.updatePerson(person, id);
      this.props.toggleForm();

    } else {
      this.addPerson(person);

    }
  };

  render() {
    // {(console.log(this.props))};

    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <h2>Form</h2>
        <div>
          <label htmlFor="firstName">First name</label>
          <input type="text"
                 name="firstName"
                 id="firstName"
                 required
                 value={this.state.first_name}
                 onChange={this.handleChangeFirstName.bind(this)}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last name</label>
          <input type="text"
                 name="lastName"
                 id="lastName"
                 required
                 value={this.state.last_name}
                 onChange={this.handleChangeLastName.bind(this)}
          />
        </div>
        <div>
          <label htmlFor="birthday">Date of birth</label>
          <input type="text"
                 name="birthday"
                 required
                 id="birthday"
                 placeholder="dd/mm/yyyy"
                 value={this.state.dob}
                 onChange={this.handleChangeDOB.bind(this)}
          />
        </div>
        <div>
          <label htmlFor="location">Location</label>
          <input type="text"
                 required
                 name="location"
                 id="location"
                 value={this.state.location}
                 onChange={this.handleChangeLocation.bind(this)}
          />
        </div>
        <input type="submit"
               value="Submit"
               disabled={this.isSubmitDisabled}
        />
      </form>
    );
  }
}

export default AddPerson;
