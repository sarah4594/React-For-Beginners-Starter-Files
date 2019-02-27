import React from 'react'
import Header from './Header'
import Order from './Order'
import Inventory from './Inventory'

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  }
  addFish = fish => {
    // 1. take a copy of existing state
    const fishes = { ...this.state.fishes }
    // 2. add out new fish to fishes variable (create unique key to keep everything separate)
    fishes[`fish${Date.now()}`] = fish
    // 2. set new fishes object to state
    this.setState({
      fishes //(fishes: fishes)
    })
  }
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
        </div>
        <Order />
        <Inventory addFish={this.addFish} />
      </div>
    )
  }
}

export default App
