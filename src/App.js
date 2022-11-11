import React, { Component } from "react";
import "./App.css";
import Nav from "./component/Nav";
import ParticlesBg from "particles-bg";
import Logo from "./component/Logo";
import Rank from "./component/Rank";
import tachyons from "tachyons";
import InputImage from "./component/Input";
import Clarifai from "clarifai";
import FaceRecog from "./component/FaceRecog";
import SignIn from "./component/Signin";
import Register from "./component/Register";

const app = new Clarifai.App({
  apiKey: "e3a60214987b448380b555ed79f929b5",
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imageUrl: "",
      route: "signin",
      box: {},
      isSignIn: false,
      isRegister: false,
      user: {
        id: "",
        email: "",
        name: "",
        entries: "",
        joined: "",
      },
    };
  }
  loadUser = (data) => {
    this.setState({
      user: {
        id: data.id,
        email: data.email,
        name: data.name,
        entries: data.entries,
        joined: data.joined,
      },
    });
  };
  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };
  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then((response) => {
        console.log(response);
        this.faceBox(this.faceCalculation(response));
      });
  };
  faceCalculation = (data) => {
    console.log(data);
    const FaceRegion = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("image");
    const width = Number(image.width);
    const height = Number(image.height);
    const region = {
      left_col: FaceRegion.left_col * width,
      right_col: width - FaceRegion.right_col * width,
      top_row: FaceRegion.top_row * height,
      bottom_row: height - FaceRegion.bottom_row * height,
    };
    return region;
  };
  faceBox = (region) => {
    console.log(region);
    this.setState({ box: region });
  };
  onSignInOut = (page) => {
    if (page === "signin") {
      this.setState({ isSignIn: false });
    } else if (page === "home") {
      this.setState({ isSignIn: true });
    }
    this.setState({ route: page });
    if (this.state.route === "register") {
      this.setState({ isRegister: true });
    }
  };

  render() {
    const { isSignIn, isRegister } = this.state;
    return (
      <div className="App">
        <Nav
          isSignIn={isSignIn}
          OnSigninOut={this.onSignInOut}
          isRegister={isRegister}
        />
        <ParticlesBg type="cobweb" color={"#ffffff"} bg={true} />
        {this.state.route === "signin" ? (
          <SignIn OnSigninOut={this.onSignInOut} loadUser={this.loadUser} />
        ) : this.state.route === "register" ? (
          <Register OnSigninOut={this.onSignInOut} loadUser={this.loadUser} />
        ) : (
          <div>
            <Logo />
            <Rank user={this.state.user} />
            <InputImage
              onChange={this.onInputChange}
              onSubmit={this.onButtonSubmit}
            />
            <FaceRecog imageUrl={this.state.imageUrl} box={this.state.box} />
          </div>
        )}
      </div>
    );
  }
}
export default App;
