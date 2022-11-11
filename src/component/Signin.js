import React, { Component } from "react";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailChange: "",
      passwordChange: "",
    };
  }
  onEmailChange = (event) => {
    this.setState({ emailChange: event.target.value });
  };
  onPasswordChange = (event) => {
    this.setState({ passwordChange: event.target.value });
  };
  onSubmitSignin = () => {
    fetch("http://localhost:4000/signin", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.state.emailChange,
        password: this.state.passwordChange,
      }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        if (data) {
          this.props.loadUser(data);
          this.props.OnSigninOut("home");
        }
      });
  };
  render() {
    const { OnSigninOut } = this.props;
    return (
      <div className="login">
        <article className="br3 ba  b--black-10 mv4 w-100 w-50-m  w-25-l mw7 center tc shadow-5">
          <main className="pa4 black-80 center ">
            <div className="measure center courier">
              <fieldset id="sign_up" className="ba b--transparent ph0 mh0" />
              <legend className="f1 fw6 ph0 mh0 center ">Sign In</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">
                  Email
                </label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
                  onChange={this.onEmailChange}
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
                  onChange={this.onPasswordChange}
                />
              </div>
              <div className="">
                <input
                  className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                  type="submit"
                  onClick={this.onSubmitSignin}
                  value="Sign in"
                />
              </div>
              <div className="lh-copy mt3">
                <a
                  href="#0"
                  className="f6 link dim black db"
                  onClick={() => OnSigninOut("register")}
                >
                  Register
                </a>
              </div>
            </div>
          </main>
        </article>
      </div>
    );
  }
}
export default SignIn;
