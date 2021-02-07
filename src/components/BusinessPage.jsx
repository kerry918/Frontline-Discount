import React, { Component } from 'react';
import {getStoreByName } from "../services/firebase";
import { Container } from 'semantic-ui-react'
import "./styles.css";

class BusinessPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            business: [],
            provs: [],
        }
    }
    componentDidMount = async () => {
        var storeName = `${this.props.match.params.business}`;
        var revStoreName = storeName.replace("%20"," ");
        const business = await getStoreByName(revStoreName);
        this.setState ({ 
            business: business,
            provs: business.Prov,
        });
    }

    render() { 
        console.log(this.state)
        return ( 
            <React.Fragment>
                <Container className="business-page-container">
                    <div className="business-title">
                        {this.state.business.Name}
                    </div>
                    <div className="business-category">
                        {this.state.business.Category}
                    </div>
                    <div className="business-body">
                        Available promotion(s): 
                        <span>&nbsp;</span> 
                        {this.state.business.Promo}
                    </div>
                    <div className="business-body">
                        Valid in: 
                        <span>&nbsp;&nbsp;</span> 
                        {this.state.provs.map((p) => {
                            return (
                                <React.Fragment>{p}&nbsp;&nbsp;</React.Fragment>
                            )
                        })}
                    </div>
                    <div className="business-body">
                        <a 
                            href={this.state.business.Source}
                            target="_blank"
                        >
                            Source
                        </a>
                    </div>
                </Container>
            </React.Fragment>
         );
    }
}
 
export default BusinessPage;