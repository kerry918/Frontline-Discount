import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import { withRouter } from 'react-router';

class CardItem extends Component {
    state = {  }
    onClick = () => {
        this.props.history.push(`/search/${this.props.name}`);
    }
    render() { 
        //console.log(this.props.name);
        return ( 
            <React.Fragment>
                <Card
                    header={this.props.name}
                    meta={this.props.category}
                    description={this.props.promo}
                    onClick={this.onClick}
                />
            </React.Fragment>
         );
    }
}
 
export default withRouter (CardItem);