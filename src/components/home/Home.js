import React, { Component } from 'react'
import NumberList from '../numbers/NumberList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

class Home extends Component {
  render() {
    const { numbers } = this.props;

    return (
      <div className="home container">
        <div className="row">
          <div className="col s12">
            <NumberList numbers={numbers} />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    numbers: state.firestore.ordered.numbers,
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'numbers', orderBy: [['createdAt', 'desc']], limit: 100},
  ])
)(Home)
