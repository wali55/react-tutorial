import ProfileClass from "./ProfileClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("constructor");
    
  }

  componentDidMount() {
    
  }

  render() {
    console.log("render");
    return (
      <div>
        <h2>About Component</h2>
        <ProfileClass name="wali" xyz="abc" />
      </div>
    );
  }
}

export default About;
