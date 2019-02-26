import React from 'react'
import { getFunName } from '../helpers'

class StorePicker extends React.Component {
  myInput = React.createRef()

  goToStore = event => {
    event.preventDefault()
    console.log(this)
  }
  render() {
    return (
      <form action="" className="store-selector" onSubmit={this.goToStore}>
        <h2>Please enter a store</h2>
        <input
          type="text"
          ref={this.myInput}
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
        />
        <button type="sumbit">Visit Store</button>
      </form>
    )
  }
}

export default StorePicker