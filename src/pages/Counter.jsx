import React, { Component } from 'react'
import {Button} from 'reactstrap'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import {increaseCounter, decreaseCounter, resetCounter} from '../redux/actions/counter'

class Counter extends Component {
  componentDidMount() {
    setInterval(() => {
      this.props.increaseCounter()
    }, 1000)
  }

  render() {
    return (
      <div className="d-flex justify-content-center align-items-center flex-column h-100">
        <h1 style={{fontSize: 80}}>{this.props.counter.value}</h1>
        <div>
          <Button onClick={() => this.props.increaseCounter()}>+</Button>
          <Button className="mx-2" onClick={() => this.props.resetCounter()}>Reset</Button>
          <Button onClick={() => this.props.decreaseCounter()}>-</Button>
        </div>
        <div className="mt-5">
          <Link to="/display">Go to Display</Link>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({counter: state.counter})

const mapDispatchToProps = {
  increaseCounter,
  decreaseCounter,
  resetCounter
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
