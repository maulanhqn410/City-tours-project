import React, { Component } from 'react';
import {tourData} from "../../tourData";
import "./tourlist.scss";
import Tour from "../Tour/Tour";
export default class TourList extends Component {
  state={
    tours: tourData,
  }
  removeTour = id =>{
    const filterState = this.state.tours.filter(tour => tour.id !== id);
    console.log(filterState);
    this.setState({
      tours: filterState
    })
  }

  render() {
    const {tours} = this.state;
    console.log(this.state.tours)
    return (
      <section className="tourlist">
        {tours.map(tour => <Tour key={tour.id} tour={tour} removeTour={this.removeTour}/>)}
        
      </section>
    )
  }
}
