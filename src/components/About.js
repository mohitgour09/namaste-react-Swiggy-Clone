import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends Component {
  constructor(props) {
    super(props);
    // console.log("Parent Constructor");
  }

  componentDidMount() {
    // console.log("parent Mount")
  }
  render() {
    // console.log("Parent Render");

    return (
      <div>
        <h1>About</h1>
        <div>
          <UserContext.Consumer>
            {({loggedInUser}) => (<h1 className="font-bold text-lg">{loggedInUser}</h1>)}
          </UserContext.Consumer>
        </div>
        <p>This is Namaste React Series</p>
        <UserClass name={"First"} location={"Indore"} />
      </div>
    );
  }
}

export default About;
