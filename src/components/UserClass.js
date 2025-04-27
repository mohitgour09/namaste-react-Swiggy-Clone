import React, {useContext} from "react";


class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };
    // console.log(this.props.name + " Constructor");
  }

  async componentDidMount() {
    // console.log(this.props.name + " Mount");
    const data = await fetch("https://api.github.com/users/mohitgour09");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log(json)
  }

  componentWillUnmount(){
    console.log("component will unmaunt")
  }
  render() {
    const { name, location , avatar_url} = this.state.userInfo;

    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: gourmohit2001@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;
