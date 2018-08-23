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

  removePerson (id) {
    const persons = this.state.persons.filter(item => {
      return item.id !== id
    });

    this.setState({persons})
  }


    findValue(persons, prop){
        const longestvalue = persons.map((person) => person[prop])
            .sort((a,b) => b.length - a.length)[0]
        return longestvalue || ''
    }

    threeOldestPerson() {
        const thisPersons = this.state.persons.map(item => new Date(item.dob))
            .sort((a,b) => a-b );
        const threeFirstItems = thisPersons.slice(0,3).map((date) => new Date().getFullYear() - date.getFullYear());

        const sumOfAge = threeFirstItems.reduce((a,b) => a + b, 0 );
        return sumOfAge || '' ;
    }

    locationCount(searchTown){
        let count = 0;
        const location = this.state.persons.map((person) => person.location);
        location.forEach((sity) => {
            if (sity.toLowerCase().trim() === searchTown) {
                count++;
            }
        });

        return count || 0
    }

  render() {
      const persons = this.state.persons;

      const longestName = this.findValue(persons, 'first_name');
      const longestLastName = this.findValue(persons, 'last_name');
      const countsOfCities = this.locationCount('kiev');

      return (
      <div>
        <h2>Table</h2>
        <div>
          <ul style={{fontWeight : 'bold'}}>
            <li>First Name</li>
            <li>Last Name</li>
            <li>DOB</li>
            <li>Location</li>
            <li>Actions</li>
          </ul>
          {persons.map((item) =>
            <Person removePerson={this.removePerson.bind(this)} updatePerson={this.updatePerson.bind(this)} key={item.id} person={item}/>)}
        </div>
          <Total countsOfCities={countsOfCities} totalAge={this.threeOldestPerson()} longestName={longestName} longestLastName={longestLastName}/>
        <AddPerson addPerson={this.addPerson.bind(this)}/>
      </div>
    );
  }
}

export default App;
