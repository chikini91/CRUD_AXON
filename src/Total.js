import React, {Component} from 'react';

class Total extends Component {
  constructor(props){
    super(props);

  }



  render() {
    return (
      <div>
        <h2>Summary</h2>
        <div>
          <span>Count of users from Kiev or kiev</span><br/>
          <span style={{paddingLeft: '20px'}} />
        </div>
        <div>
          <span>Sum of three oldest user ages</span><br/>
          <span style={{paddingLeft: '20px'}} >33</span>
        </div>
        <div>
          <span>Longest string of first name + last name</span><br/>
          <span style={{paddingLeft: '20px', fontWeight: 'bold'}} >
              {/*{this.props.longestName} {this.props.longestLastName}*/}
              </span>
        </div>
      </div>
    );
  }
}

export default Total;
