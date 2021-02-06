import React from 'react'; 
import Display from './components/Display/Display';
import MapMain from './components/Map/WrappedMap';
import { db } from './services/firebase'; 
import { Route, Switch } from "react-router-dom";

class App extends React.Component {
  state = {
    businesses: null
  }

  // Run as soon as App on the screen 
  componentDidMount(){
    db.collection('Business')
      .get()
      .then( snapshot => {
        const businesses = []
        snapshot.forEach( doc => {
          const data = doc.data()
          businesses.push(data); 
        })
        this.setState({ businesses:businesses })
      })
      .catch (error => console.log(error))
  }

  render(){
    return (
      <div className="App">
        <h1>Frontline Deals</h1> 
        <Switch>
          <Route exact path="/map" component={MapMain} />
        </Switch>
        {
          this.state.businesses && 
          <Display businesses={this.state.businesses}/>
        }
      </div>
    )
  }
}

export default App
