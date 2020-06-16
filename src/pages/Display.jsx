import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import {connect} from 'react-redux'

class Display extends Component {
  render() {
    return (
      <div className="d-flex justify-content-center align-items-center flex-column h-100">
        <div>
          <h1 style={{fontSize: 80}}>{this.props.counter.value}</h1>
        </div>
        <div className="mt-5">
          <Link to="/">Back</Link>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  counter: state.counter
})

export default connect(mapStateToProps)(Display)
