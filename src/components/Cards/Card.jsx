import React, { Component } from 'react';

class Card extends Component {
    state = {  }
    render() { 
        console.log(this.props.name);
        return ( 
            <React.Fragment>

                <div>{this.props.name}</div>
            </React.Fragment>
         );
    }
}
 
export default Card;