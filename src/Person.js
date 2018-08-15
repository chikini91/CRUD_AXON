import React, {Component} from 'react';

class Person extends Component {
  constructor(props){
    super(props);

    this.state = {};
  }

  render() {
    return (
      <tr>
        {/*{console.log(this.props)}*/}
        <td>{this.props.firstName}</td>
        <td>{this.props.lastName}</td>
        <td>{this.props.dob}</td>
        <td>{this.props.location}</td>
        <td>
          <button>edit</button>
          <button>delete</button>
        </td>
      </tr>
    );
  }
}

export default Person;
