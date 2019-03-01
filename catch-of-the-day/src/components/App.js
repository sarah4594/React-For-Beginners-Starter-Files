import React from 'react'
import Header from './Header'
import Order from './Order'
import Inventory from './Inventory'
import sampleFishes from '../sample-fishes'

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  }
  addFish = fish => {
    this.setState(prevState => {
      const n = Object.keys(prevState.fishes).length
      //console.log('prev state', n, fish.name, prevState)
      return { fishes: { ...prevState.fishes, [`fish${n + 1}`]: fish } }
    })
  }

  loadSampleFishes = () => {
    Object.values(sampleFishes).forEach(fish => {
      this.addFish(fish)
    })
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
        </div>
        <Order />
        <Inventory
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
        />
      </div>
    )
  }
}

export default App
