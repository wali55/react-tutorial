import React from "react";

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: "Dummy Name",
        location: "Dummy Location"
      },
    };
    console.log('constructor')
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    this.timer = setInterval(() => {
      console.log('react op');
    }, 1000)
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.count !== prevState.count) {
      // do something
    }
    if (this.state.count2 !== prevState.count2) {

    }
    console.log('component did update');
  }

  componentWillUnmount() {
    console.log('component will unmount');
    clearInterval(this.timer);
  }

  render() {
    console.log('render')
    return (
      <div>
        <h2>ProfileClass Component</h2>
        <h2>Name: {this.state.userInfo.name}</h2>
        <h2>Location: {this.state.userInfo.location}</h2>
      </div>
    );
  }
}

export default ProfileClass;
