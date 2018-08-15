import React, {Component} from 'react';
import {addPerson} from './client.js';
import axios from 'axios';



class AddPerson extends Component {
  constructor(props){
    super(props);

    this.state = {
      first_name: '',
      last_name: '',
      dob: '',
      location: ''
    };

  }


  handleChangeFirstName(e) {
    this.setState({
      first_name: e.target.value
    })
  }

  handleChangeLastName(e) {
    this.setState({
      last_name: e.target.value
    })
  }

  handleChangeDOB(e) {
    this.setState({
      dob: e.target.value
    })
  }

  handleChangeLocation(e) {
    this.setState({
      location: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { first_name, last_name, dob, location } = this.state;

    axios({
      method: 'post',
      url: 'http://localhost:4000/persons',
      data: {
        first_name,
        last_name,
        dob,
        location
      }
    });
    //
    // const { firstName, lastName, dob, location } = this.state;
    //
    // axios.post(addPerson, { firstName: 'as' ,
    //                         lastName: lastName,
    //                         dob: dob,
    //                         location: location })
    //   .then((result) => {
    //     console.log(result);
    //   });
  }

  render() {
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
                 onInput={this.handleChangeFirstName.bind(this)}
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
               disabled={!this.state.first_name ||
                         !this.state.last_name ||
                         !this.state.dob ||
                         !this.state.location}

        />
      </form>
    );
  }
}

export default AddPerson;
