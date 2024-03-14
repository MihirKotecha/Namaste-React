import React from "react";
import { Link } from "react-router-dom";

class UserCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: [],
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/MihirKotecha");
    const json = await data.json();
    console.log(json);
    this.setState({ userInfo: json });
  }
  render() {
    // const { name, location } = this.props;
    const { userInfo } = this.state;
    const { login, avatar_url, html_url } = userInfo;
    return (
      <div className="border-solid border-2 m-4 p-4 border-black h-[220px] flex justify-between items-center">
        <img className="rounded-full w-44" src={avatar_url} alt="user" />
        <div>
          <h3>Name: {login}</h3>
          <h4>Contact: mihirkotecha28@gmail.com</h4>
          <Link to={html_url}>GitHub Profile</Link>
        </div>
      </div>
    );
  }
}

export default UserCard;
