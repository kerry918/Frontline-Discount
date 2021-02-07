import React from "react";
import { Container, Header, Button } from "semantic-ui-react";
import "./Landing.css";
import pic from "../../image/IconFour.png";
import picTwo from "../../image/IconThree.jpg";

export default function LandingPage() {
  return (
    <React.Fragment>
      <Container class="main">
        <div className="title">
          Herolines<i class="heartbeat icon"></i>
        </div>
        <p className="desc">
          "Thank you for everything that you do, everything you've sacrificed
          and for your resilience during this time! You are saving lives.
          <div className="highlight">
            You are making the world a better place.{" "}
          </div>
          We are with you!"
        </p>
        <div className="img">
          <img src={pic} />
        </div>
        <Button className="massive ui button-landing">
          <a href="/search">Search</a>
        </Button>
      </Container>
    </React.Fragment>
  );
}
