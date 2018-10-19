import React from 'react'
import moment from 'moment'

const NumberSummary = ({number}) => {
  return (
    <div className="number-summary">
      <span className="black-text number-text">{number.text}</span>
      <span className="grey-text right number-date">{moment(number.createdAt.toDate()).calendar()}</span>
    </div>
  )
}

export default NumberSummary
