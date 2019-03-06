import React from 'react'
import { formatPrice } from '../helpers'

class Order extends React.Component {
  renderOrder = key => {
    const fish = this.props.fishes[key]
    const count = this.props.order[key]
    return (
      <li key={key}>
        {count} lbs {fish.name} {formatPrice(count * fish.price)}
      </li>
    )
  }
  render() {
    const { order, fishes } = this.props
    const orderIds = Object.keys(order)
    const total = orderIds.reduce(
      (prevValue, fishId) => prevValue + order[fishId] * fishes[fishId].price,
      0
    )
    return (
      <div className="order-wrap">
        <h2>Order</h2>
        <ul className="order">{orderIds.map(this.renderOrder)}</ul>
        <div className="total">
          Total:
          <strong>{formatPrice(total)}</strong>
        </div>
      </div>
    )
  }
}
export default Order
