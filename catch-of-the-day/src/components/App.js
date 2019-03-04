import React from 'react'
import Header from './Header'
import Order from './Order'
import Inventory from './Inventory'
import sampleFishes from '../sample-fishes'
import Fish from './Fish'

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

  addToOrder = key => {
    // 1. Take a copy of state
    const order = { ...this.state.order }
    // 2. Either add to order orr update number in order
    order[key] = order[key] + 1 || 1
    //3. Call setState to update state object
    this.setState({ order })
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <ul className="fishes">
            {Object.entries(this.state.fishes).map(([key, fish]) => (
              <Fish
                key={key}
                index={key}
                details={fish}
                addToOrder={this.addToOrder}
              />
            ))}
          </ul>
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
