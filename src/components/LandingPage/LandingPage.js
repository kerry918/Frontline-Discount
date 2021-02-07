import React from 'react'
import { Container, Header } from 'semantic-ui-react'
import './Landing.css';
import pic from '../../image/IconFour.png'
import picTwo from '../../image/IconThree.jpg'

export default function LandingPage() {
    return (
        <React.Fragment>
            <Container class="main">
                <div class="title">
                    Herolines<i class="heartbeat icon"></i>
                </div>
                <p class="desc">"Thank you for everything that you do, everything you've sacrificed
                    and for your resilience during this time! You are saving lives.
                    <div class="highlight">You are making the world a better place. </div>We are with you!"</p>
                <div class="img">
                    <img src={pic}/>
                
                </div> 
                <button class="massive ui button">
                <a href="/search">
                    Search
                </a>
                </button>
            </Container>
        </React.Fragment>
    )
}