import React, { Component } from 'react'
import { connect } from 'react-redux'
import { foundNumber } from '../../store/actions/numberActions'

class FoundNumber extends Component {
  state = {
    text: '',
    description: '',
    contactMe: '',
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.foundNumber(this.state);
    this.props.history.push('/');
  }
  render() {
    return (
      <div className="container">
        <div className="row">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Пожалуйста, заполнитe форму</h5>
          <div className="input-field">
            <input required minLength="6" maxLength="10" type="text" id='text' onChange={this.handleChange} />
            <label htmlFor="number">Какой номер Вы нашли?</label>
          </div>
          <div className="input-field">
            <input required minLength="6" maxLength="100" type="text" id='contactMe' onChange={this.handleChange} />
            <label htmlFor="contactMe">Как с Вами связаться?</label>
          </div>
          <div className="input-field">
            <textarea id="description" maxLength="500" className="materialize-textarea" onChange={this.handleChange}></textarea>
            <label htmlFor="contdescriptionent">Дополнительная информация</label>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1">Добавить в найденные номера</button>
          </div>
        </form>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    foundNumber: (number) => dispatch(foundNumber(number))
  }
}

export default connect(null, mapDispatchToProps)(FoundNumber)
