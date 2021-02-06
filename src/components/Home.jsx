import React, { Component } from 'react';
import { db } from "../services/firebase";
import { Dropdown, Grid } from 'semantic-ui-react'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            provOptions: [],
            catOptions: [],
            businesses: [],
        }
    }
    componentDidMount = async () => {
        this.getStores("ON", null, true, false);
    }

   
    render() { 
        console.log(this.state);
        return ( 
            <React.Fragment>
                <div>frontline deals </div>
            </React.Fragment>
         );
    }
}
 
export default Home;