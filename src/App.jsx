import { Component } from "react";
import LoginForm from "./components/LoginForm";

class App extends Component {
  state = {
    users: [{ name: "asd" }, { name: "qwe" }],
  };

  constructor() {
    super();
    this.addNewUser = this.addNewUser.bind(this);
  }

  addNewUser(user) {
    this.setState((state) => {
      return state.users.push(user);
    });
  }

  render() {
    const { addNewUser } = this;

    const { users } = this.state;
    return (
      <>
        <LoginForm submitFunc={addNewUser} />
        {users.map((user) => {
          return <h1 key={user.name}>{user.name}</h1>;
        })}
      </>
    );
  }
}

export default App;
