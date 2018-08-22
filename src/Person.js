import React, { Component } from "react";
import AddPerson from "./AddPerson";
import PersonView from "./PersonView";
import { removePerson } from "./client";

class Person extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEdited: false
    };
  }

  toggle() {
    this.setState({isEdited: !this.state.isEdited})
  }

  remove(person) {
    const {id} = this.props.person;
    removePerson(id).then(({data: person}));
    this.props.removePerson(id)
  }

  render() {
    return this.state.isEdited ?
      <div>
        <AddPerson updatePerson={this.props.updatePerson} toggleForm={this.toggle.bind(this)} person={this.props.person}/>
        <div>
          <button onClick={this.toggle.bind(this)}>Cancel</button>
        </div>
      </div> :
      <div>
        <PersonView person={this.props.person}/>
        <div>
          <button onClick={this.toggle.bind(this)}>Edit</button>
          <button onClick={this.remove.bind(this)}>Delete</button>
        </div>
      </div>;
  }
}

export default Person;
