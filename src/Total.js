import React, {Component} from 'react';

class Total extends Component {
  constructor(props){
    super(props);

    this.state = {};
  }

  C

  render() {
    const {location} = this.props.persons;
    return (
      <div>
        {console.log(this.props)}
        {console.log(location)}

        <h2>Summary</h2>
        <div>
          <span>Count of users from Kiev or kiev</span><br/>
          <span style={{paddingLeft: '20px'}} >2</span>
        </div>
        <div>
          <span>Sum of three oldest user ages</span><br/>
          <span style={{paddingLeft: '20px'}} >33</span>
        </div>
        <div>
          <span>Longest string of first name + last name</span><br/>
          <span style={{paddingLeft: '20px'}} >bla blawitch</span>
        </div>
      </div>
    );
  }
}

export default Total;
