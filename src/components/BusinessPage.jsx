import React, { Component } from 'react';
import {getStoreByName } from "../services/firebase";
import { Container } from 'semantic-ui-react'
import "./styles.css";
import MapMain from './Map/WrappedMap';
import Header from './Header';

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
                <Header />
                <Container>
                <div className="back">
                    <a href="/search">
                    Back to Search{" "}<i class="syringe icon"></i>
                    </a>
                </div>
                </Container>
                
                <Container className="business-page-container">
                    <div className="business-title highlight-y">
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
                            Click for More Info
                        </a>
                    </div>
                </Container>
                <br/>
                <MapMain/>
                <br/>
            </React.Fragment>
         );
    }
}
 
export default BusinessPage;