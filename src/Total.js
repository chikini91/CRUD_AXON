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
          <span style={{paddingLeft: '20px', fontWeight: 'bold'}}>
            {this.props.countsOfCities}
          </span>
        </div>
        <div>
          <span>Sum of three oldest user ages</span><br/>
          <span style={{paddingLeft: '20px', fontWeight: 'bold'}} >
              {this.props.totalAge}
          </span>
        </div>
        <div>
          <span>Longest string of first name</span><br/>
          <span style={{paddingLeft: '20px', fontWeight: 'bold'}} >
              {this.props.longestName}
          </span>
        </div>
        <div>
          <span>Longest string of last name</span><br/>
          <span style={{paddingLeft: '20px', fontWeight: 'bold'}} >
              {this.props.longestLastName}
          </span>
        </div>
      </div>
    );
  }
}

export default Total;
