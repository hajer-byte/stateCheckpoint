import React from "react";
import { MDBBtn } from "mdbreact";
class App extends React.Component {
  state = {
    Person: {
      fullName: "Hajer Mejri",
      bio: "Always aiming to be a rainbow at the end of a thunderstorm!",
      imgSrc: "./me.jpg",
      profession: "Front-end developer",
    },
    show: "false",
    counter: 0,
  };
  handleClick = () => {
    this.setState({ show: !this.state.show });
  };
  componentDidMount() {
    setInterval(() => {
      this.setState({ counter: this.state.counter + 1 });
    }, 1000);
  }
  render() {
    const { counter } = this.state;
    return (
      <>
        <MDBBtn
          style={{
            position: "relative",
            left: "25%",
            width: "50%",
            fontFamily: "Sofia sans-serif",
          }}
          onClick={this.handleClick}
        >
          person's profile
        </MDBBtn>
        <h1
          style={{
            fontFamily: "Sofia sans-serif",
            textAlign: "center",
            border: "solid black 2px",
            backgroundColor: "burlywood",
          }}
        >
          {counter}
        </h1>
        {this.state.show && (
          <div
            style={{
              backgroundColor: "bisque",
              textAlign: "center",
              fontFamily: "Sofia sans-serif",
            }}
          >
            <h1>{this.state.Person.fullName}</h1>
            <h2>{this.state.Person.profession}</h2>
            <h3>{this.state.Person.bio}</h3>
            <img
              style={{ width: "600px", height: "500px" }}
              src={this.state.Person.imgSrc}
              alt="user pic"
            />
          </div>
        )}
      </>
    );
  }
}
export default App;
