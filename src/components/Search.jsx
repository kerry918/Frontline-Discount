import React, { Component } from 'react';
import { db } from "../services/firebase";
import { Container, Divider, Dropdown, Button, Icon } from 'semantic-ui-react';
import {provOptions, categoryOptions} from "./Options";
import CardsContainer from "./Cards/CardsContainer";
import "./styles.css"

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            businesses: [],
            province: "All",
            category: "All",
            byProv: false,
            byCategory: false,
        }
    }
    componentDidMount = async () => {
        this.getStores(this.state.province, this.state.category, this.state.byProv, this.state.byCategory);
    }
    getStores = async (prov, category, byProv, byCategory) => {
        if (byProv === true && byCategory === false) {
            try {
              const storesByName = await db
                .collection("Business")
                .where("Prov", "array-contains", prov)
                .orderBy("Name")
                .get()
                .then((snapshot) => {
                  const businesses = [];
                  snapshot.forEach((doc) => {
                    const data = doc.data();
                    businesses.push(data);
                  });
                  this.setState({ businesses: businesses });
                });
        
              return storesByName;
            } catch (error) {
              console.error(error);
            }
            return;
          }
        else if (byProv === false && byCategory === true) {
            try {
                const storesByName = await db
                .collection("Business")
                .where("Category", "==", category)
                .orderBy("Name")
                .get()
                .then((snapshot) => {
                  const businesses = [];
                  snapshot.forEach((doc) => {
                    const data = doc.data();
                    businesses.push(data);
                  });
                  this.setState({ businesses: businesses });
                });
        
              return storesByName;
            } catch (error) {
              console.error(error);
            }
            return;
        }
        else if (byProv === true && byCategory === true) {
            try {
                const storesByName = await db
                .collection("Business")
                .where("Prov", "array-contains", prov)
                .where("Category", "==", category)
                .orderBy("Name")
                .get()
                .then((snapshot) => {
                  const businesses = [];
                  snapshot.forEach((doc) => {
                    const data = doc.data();
                    businesses.push(data);
                  });
                  this.setState({ businesses: businesses });
                });
        
              return storesByName;
            } catch (error) {
              console.error(error);
            } 
            return;
        }
        else {
            try {
                const storesByName = await db
                .collection("Business")
                .orderBy("Name")
                .get()
                .then((snapshot) => {
                  const businesses = [];
                  snapshot.forEach((doc) => {
                    const data = doc.data();
                    businesses.push(data);
                  });
                  this.setState({ businesses: businesses });
                });
        
              return storesByName;
            } catch (error) {
              console.error(error);
            }
            return;
        }

    }
    onProvChange = (e, data) => {
        this.setState({
            province:data.value,
        })
        if (data.value != "All") {
            this.setState ({
                byProv: true,
            })
        }
        else {
            this.setState ({
                byProv: false,
            })
        }
    }
    onCategoryChange = (e, data) => {
        this.setState ({
            category:data.value,
        })
        if (data.value != "All") {
            this.setState ({
                byCategory: true,
            })
        }
        else {
            this.setState ({
                byCategory: false,
            })
        }
    }
    onSearch = () => {
        this.getStores(this.state.province, this.state.category, this.state.byProv, this.state.byCategory);
    }
    render() { 
        console.log(this.state);
        return ( 
            <React.Fragment>
                <Container textAlign='center' style={{paddingTop: "5%"}}>
                    <span className="search-bar">
                        Show me deals in
                        <span>&nbsp;&nbsp;</span>
                        <Dropdown
                            inline
                            options={provOptions}
                            defaultValue={provOptions[0].value}
                            onChange={this.onProvChange}
                        />
                        <span>&nbsp;&nbsp;</span>
                        for{' '}
                        <span>&nbsp;&nbsp;</span>
                        <Dropdown
                            inline
                            options={categoryOptions}
                            defaultValue={categoryOptions[0].value}
                            onChange={this.onCategoryChange}
                        />
                        <span>&nbsp;&nbsp;</span>
                        <Button 
                            style={{background:"white"}} 
                            size='huge'
                            icon
                            onClick={this.onSearch}
                        >
                            <Icon name='arrow right' />
                        </Button>
                    </span>
                    <div className="padding-bottom">
                      <CardsContainer 
                          businesses={this.state.businesses}
                      />
                    </div>
                </Container>
            </React.Fragment>
         );
    }
}
 
export default Search;

