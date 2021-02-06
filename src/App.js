import React from 'react'; 
import Display from './components/Display/Display';
import { db } from './services/firebase'; 

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
        {
          this.state.businesses && 
          <Display businesses={this.state.businesses}/>
        }
      </div>
    )
  }
}

export default App
