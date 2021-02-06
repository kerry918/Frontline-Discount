import React, { Component } from 'react';
import Card from "./Card";

class CardsContainer extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                {this.props.businesses.map((business) => {
                    return (
                        <div key={business.Name}>
                            <Card
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