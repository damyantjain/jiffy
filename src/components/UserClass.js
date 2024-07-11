import React from "react";
import UserContext from "../utils/UserContext";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {},
    };
  }

  componentDidMount() {
    this.fetchUserData();
  }

  async fetchUserData() {
    const data = await fetch("https://api.github.com/users/damyantjain");
    const json = await data.json();
    this.setState({ userInfo: json });
  }

  render() {
    const { name } = this.props;
    const user = this.state.userInfo;
    return (
      <div className="user-card">
        <img className="userImg" src={user.avatar_url} />
        <UserContext.Consumer>
          {(data) => <h3>{data.logged_in_user}</h3>}
        </UserContext.Consumer>
        <h3>{user.name}</h3>
        <h4>{user.location}</h4>
        <h4>Linkedin - @damyant</h4>
      </div>
    );
  }
}

export default UserClass;
