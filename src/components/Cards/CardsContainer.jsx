import React, { Component } from 'react';
import CardItem from "./CardItem";
import "./Cards.css"

class CardsContainer extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                {this.props.businesses.map((business) => {
                    return (
                        <div className="container-cards" key={business.Name} >
                            <CardItem
                                key={business.Name}
                                name={business.Name}
                                category={business.Category}
                                promo={business.Promo}
                                source={business.Source}
                                prov={business.Prov}
                            />
                        </div>
                    )
                })}
            </React.Fragment>
         );
    }
}
 
export default CardsContainer;