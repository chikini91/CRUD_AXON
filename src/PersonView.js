import React from "react";

const PersonView = ({ person }) => {
  const { first_name, last_name, dob, location } = person;
  return <ul>
      {console.log(person)}
    <li>{first_name}</li>
    <li>{last_name}</li>
    <li>{dob}</li>
    <li>{location}</li>
  </ul>;
};

export default PersonView;