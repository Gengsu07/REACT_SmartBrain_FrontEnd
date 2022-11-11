import React, { Component } from "react";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      name: "",
    };
  }
  onEmail = (event) => {
    this.setState({ email: event.target.value });
  };
  onPassword = (event) => {
    this.setState({ password: event.target.value });
  };
  onName = (event) => {
    this.setState({ name: event.target.value });
  };
  onSubmit = () => {
    fetch("http://localhost:4000/register", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        name: this.state.name,
      }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data) {
          console.log(data);
          this.props.loadUser(data);
          this.props.OnSigninOut("signin");
        } else {
          alert("Register Failed!, lengkapi data");
        }
      });
  };
  render() {
    return (
      <div className="register">
        <article className="br3 ba  b--black-10 mv4 w-100 w-50-m  w-25-l mw7 center tc shadow-5">
          <main className="pa4 black-80 center ">
            <div className="measure center courier">
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="nama">
                  Nama Lengkap
                </label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  name="nama"
                  id="nama"
                  onChange={this.onName}
                />
                <label className="db fw6 lh-copy f6" htmlFor="email-address">
                  Email
                </label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
                  onChange={this.onEmail}
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">
                  Password
                </label>
                <input
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="password"
                  name="password"
                  id="password"
                  onChange={this.onPassword}
                />
              </div>
              <div className="">
                <input
                  className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                  type="submit"
                  onClick={this.onSubmit}
                  value="Submit"
                />
              </div>
            </div>
          </main>
        </article>
      </div>
    );
  }
}
export default Register;
