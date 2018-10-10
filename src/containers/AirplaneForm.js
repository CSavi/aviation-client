import React, { Component } from 'react';
import { connect } from 'react-redux';

import updateAirplaneFormData from '../actions/airplaneForm';
import { createAirplane } from '../actions/airplanes';

class AirplaneForm extends Component {

  handleOnChange = (event) => {
   const {name, value} = event.target;
   let currentAirplaneFormData = Object.assign({}, this.props.airplaneFormData, {
     [name]: value
   })
   this.props.updateAirplaneFormData(currentAirplaneFormData);
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.createAirplane(this.props.airplaneFormData);
  }
  
  render() {
    const {name, seats, img_url, lesson_rate, identifier} = this.props.airplaneFormData;

    return(
      <form className="AirplaneForm" onSubmit={this.handleOnSubmit}>
        <h2>Add Aircraft Rental/Listing Details</h2>
        <label>Make/Model</label>
        <input type="text" name="name" value={name} className="AirplaneFormInput" onChange={this.handleOnChange}/> 
        <label>Seats</label>
        <input type="text" name="seats" value={seats} className="AirplaneFormInput" onChange={this.handleOnChange}/>
        <label>Image URL(http://www...)</label>
        <input type="text" name="img_url" value={img_url} className="AirplaneFormInput" onChange={this.handleOnChange}/>
        <label>Lesson Price Per Hour</label>
        <input type="text" name="lesson_rate" value={lesson_rate} className="AirplaneFormInput" onChange={this.handleOnChange}/>
        <label>FAA identifier(N-Number)</label>
        <input type="text" name="identifier" value={identifier} className="AirplaneFormInput"  onChange={this.handleOnChange}/>

        <input type="submit" className="AirplaneFormInput"/>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    airplaneFormData: state.airplaneFormData
  }
}

export default connect(mapStateToProps, {
  updateAirplaneFormData,
  createAirplane
} )(AirplaneForm);