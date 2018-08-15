import React, {Component} from 'react';
import AddPerson from './AddPerson.js';
import Total from './Total.js';
import Person from './Person.js';
import {getPersons} from './client.js';

class App extends Component {
  state = {
    persons: []
  };

  getPeopleList(){
    getPersons().then(({data}) => {
      this.setState({
        persons: data
      })
    })
  }
  componentDidUpdate(prevState) {
    if (this.state.persons === prevState.persons ) {
      // At this point, we're in the "commit" phase, so it's safe to load the new data.
      setTimeout(this.getPeopleList(), 100)
    }
  }

  componentDidMount() {
    this.getPeopleList()
  }


  // componentWillReceiveProps(nextProps) {
  //   if(nextProps.state.persons !== this.state.persons) {
  //     this.getPeopleList()
  //   }
  // }
  // componentWillUpdate() , componentDidUpdate { и похерячили консоль логиии
  // componentDidUpdate() {
  //   this.getPeopleList()
  // }

  render() {
    const persons = this.state.persons;
    {console.log(this.state.persons)}
    return (
      <div>
        <h2>Table</h2>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>DOB</th>
              <th>Location</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
          {persons.map((item) =>
            <Person key={item.id}
                    firstName={item.first_name}
                    lastName={item.last_name}
                    dob={item.dob}
                    location={item.location}
            />)}
          </tbody>
        </table>
        {/*<Total/>*/}
        <AddPerson/>
      </div>
    );
  }
}

export default App;
