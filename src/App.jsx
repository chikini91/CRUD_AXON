import React, { Component } from "react";
import AddPerson from "./AddPerson.js";
import Person from "./Person.js";
import Total from "./Total.js";
import { getPersons } from "./client.js";

class App extends Component {
  state = {
    persons: []
  };

  componentDidMount() {
    this.getPersons();
  }

  getPersons() {
    getPersons().then(({ data: persons }) => {
      this.setState({
        persons
      });
    });
  }

  addPerson(person) {
    this.setState(
      { persons: [...this.state.persons, person]}
    );
  }

  updatePerson(person) {
    const persons = this.state.persons.map(item => {
      return item.id === person.id ? person : item;
    });
    this.setState({persons})
  }

  removePerson (person) {

    // debugger;
    const persons = this.state.persons.filter(item => {
      console.log(person);
      console.log(item);
      return item.id !== person.id ? item : person
    });

    this.setState({persons})
  }

  render() {
    const persons = this.state.persons;
    return (
      <div>
        <h2>Table</h2>
        <div>
          <ul>
            <li>First Name</li>
            <li>Last Name</li>
            <li>DOB</li>
            <li>Location</li>
            <li>Actions</li>
          </ul>
          {persons.map((item) =>
            <Person removePerson={this.removePerson.bind(this)} updatePerson={this.updatePerson.bind(this)} key={item.id} person={item}/>)}
        </div>
        <Total persons={this.state.persons}/>
        <AddPerson addPerson={this.addPerson.bind(this)}/>
      </div>
    );
  }
}

export default App;
