import React from "react";
import UserContext from "../utils/UserContext";

class AboutOne extends React.Component {
  render () {
    return (
      <div>
        <h1>About</h1>
        <UserContext.Consumer>
          {({user}) => <h1>{user.name}</h1>}
        </UserContext.Consumer>
      </div>
    )
  }
  constructor(props) {
    super(props);
  }
  componentDidMount() {

  }
}

export default AboutOne;
