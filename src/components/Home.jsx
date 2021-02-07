import React, { Component } from 'react';
import LandingPage from './LandingPage/LandingPage'


class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() { 
        console.log(this.state);
        return ( 
            <React.Fragment>
                <LandingPage/>
            </React.Fragment>
         );
    }
}
 
export default Home;