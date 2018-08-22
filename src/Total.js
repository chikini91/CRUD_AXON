import React, {Component} from 'react';

class Total extends Component {
  constructor(props){
    super(props);

  }



  render() {
      // const location = this.props;
      const persons = this.props.persons;
      // const max = this.props.persons.reduce(function(prev, current) {
      //     return (prev.first_name.length > current.first_name.length) ? prev.first_name : current.first_name
      // });

    return (
      <div>
        <h2>Summary</h2>
        <div>
          <span>Count of users from Kiev or kiev</span><br/>
          {/*<span>{max}</span><br/>*/}
          <span style={{paddingLeft: '20px'}} >
              {/*{location.persons.map(item =>*/}
                  // item.first_name
              // )}
          </span>
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
