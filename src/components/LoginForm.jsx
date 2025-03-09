import { Component } from "react";

class LoginForm extends Component {
  state = {
    login: "",
    password: "",
    email: "",
  };

  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.submit = this.submit.bind(this);
  }

  //   handleSubmit = (e) => {
  //     e.preventDefault();
  //     const formElements = e.currentTarget.elements;
  //     const login = formElements.login.value;
  //     const email = formElements.email.value;
  //     const password = formElements.password.value;
  //     const user = { login, email, password };
  //     this.props.submitFunc(user);
  //   };

  handleSubmit(e) {
    const name = e.target.name;
    this.setState({ [name]: e.target.value });
  }

  submit(e) {
    e.preventDefault();
    const user = {
      login: this.state.login,
      email: this.state.email,
      password: this.state.password,
    };
    this.props.submitFunc(user);
  }

  render() {
    const { login, password, email } = this.state;
    return (
      <form onSubmit={this.submit}>
        <input
          type="text"
          name="login"
          placeholder="login"
          autoComplete="off"
          value={login}
          onChange={this.handleSubmit}
        />
        <input
          type="email"
          name="email"
          placeholder="email"
          autoComplete="off"
          value={email}
          onChange={this.handleSubmit}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          autoComplete="off"
          value={password}
          onChange={this.handleSubmit}
        />
        <button type="submit">SUBMIT</button>
      </form>
    );
  }
}

export default LoginForm;
