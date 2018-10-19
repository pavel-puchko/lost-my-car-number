import React from 'react'
import NumberSummary from './NumberSummary'
import { Link } from 'react-router-dom'

const NumberList = ({numbers}) => {
  return numbers ? (
    <div className="number-list collection">
      { numbers.map(number => {
        return (
          <Link to={'/number/' + number.id} key={number.id} className="collection-item">
            <NumberSummary number={number} />
          </Link>
        )
      })} 
    </div>
  ) : (
    <div className="loading container center">
      <h5 className="black-text center-align">loading...</h5>
      <div className="progress pink">
        <div className="indeterminate white"></div>
      </div>
    </div>
  )
}

export default NumberList
