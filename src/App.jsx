import React, { Component } from "react";
import AddPerson from "./AddPerson.js";
import Person from "./Person.js";
import Total from "./Total.js";
import { getPersons } from "./client.js";

class App extends Component {
   state = {
        longestName: '',
        longestLastName: '',
        persons: [
        ]
   };

  componentDidMount() {
        this.getPersons();
        // this.longestValue ()
  }

    // longestValue (){
    //     const longestName = this.state.persons.reduce(function(current, next) {
    //         return (current.length > next.length) ?
    //             current.first_name : next.first_name
    //         });
    //
    //     const longestLastName = this.stateate.persons.reduce(function(current, next) {
    //         return (current.length > next.length) ?
    //             current.last_name : next.last_name
    //         });
    //
    //     this.setState({longestName});
    //     this.setState({longestLastName})
    // }

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

  removePerson (id) {
    const persons = this.state.persons.filter(item => {
      return item.id !== id
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
          {/*<Total longestName={this.state.longestName} longestLastName={this.state.longestLastName}/>*/}
          <Total/>
        <AddPerson addPerson={this.addPerson.bind(this)}/>
      </div>
    );
  }
}

export default App;
