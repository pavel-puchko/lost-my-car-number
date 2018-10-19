import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import moment from 'moment'

const NumberDetails = (props) => {
  const { number } = props;
  if (number) {
    return (
      <div className="container section number-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <div className="card-title black-text">
              <span className="number-text">{number.text}</span>
              <span className="right lighten-4 grey-text number-date">{moment(number.createdAt.toDate()).calendar()}</span>
            </div>
            <p>{number.description}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>{number.contactMe}</div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="loading container center">
        <h5 className="black-text center-align">loading...</h5>
        <div className="progress pink">
          <div className="indeterminate white"></div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const numbers = state.firestore.data.numbers;
  const number = numbers ? numbers[id] : null
  return {
    number: number,
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{
    collection: 'numbers'
  }])
)(NumberDetails)
