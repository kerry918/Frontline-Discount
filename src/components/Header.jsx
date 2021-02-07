import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import "./styles.css";
class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <Container className="header-l">
                <a href="/">
                    Herolines<i class="heartbeat icon"></i>
                </a>
            </Container>
         );
    }
}
 
export default Header;