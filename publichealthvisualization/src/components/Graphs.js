import React, { Component } from "react";

import CanvasJSReact from '../canvasjs.react';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Select from 'react-select';
import {csv} from 'd3';

import {VictoryBar, VictoryChart } from 'victory';

const locations = [
  {value: 1, label:"Atlanta (Fulton County), GA"},
  {value: 2, label:"Kansas City, MO"},
  {value: 3, label:"Long Beach, CA"},
  {value: 4, label:"San Jose, CA"},
  {value: 5, label:"Washington, DC"},
  {value: 6, label:"U.S. Total"},
  {value: 7, label:"Seattle, WA"},
  {value: 8, label:"Baltimore, MD"},
  {value: 9, label:"Boston, MA"},
  {value: 10, label:"Chicago, IL"},
  {value: 11, label:"Cleveland, OH"},
  {value: 12, label:"Dallas, TX"},
  {value: 13, label:"Denver, CO"},
  {value: 14, label:"Detroit, MI"},
  {value: 15, label:"Fort Worth (Tarrant County), TX"},
  {value: 16, label:"Houston, TX"},
  {value: 17, label:"Las Vegas (Clark County), NV"},
  {value: 18, label:"Miami (Miami-Dade County), FL"},
  {value: 19, label:"Minneapolis, MN"},
  {value: 20, label:"New York, NY"},
  {value: 21, label:"Oakland, CA"},
  {value: 22, label:"Philadelphia, PA"},
  {value: 23, label:"Phoenix, AZ"},
  {value: 24, label:"Portland (Multnomah County), OR"},
  {value: 25, label:"Sacramento, CA"},
  {value: 26, label:"San Antonio, TX"},
  {value: 27, label:"San Diego County, CA"},
  {value: 28, label:"San Francisco, CA"}, 
]

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Graphs extends Component {
  state = {
    selectedOption: locations[0]
  }

  componentDidMount() {
    
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState(
      {location_filter: e.target.value}
    )
  }

  handleChange = selectedOption => {
    this.setState(
      { selectedOption },
      () => console.log(`Option selected:`, this.state.selectedOption)
    );
  };

  useEffect = () => {
    csv('data.csv').then(data => {
      console.log(data);
    });
  }

  render() {
    const options = {
        title: {
          text: "Basic Column Chart in React"
        },
        data: [{				
          type: "column",
          dataPoints: [
              { label: "Apple",  y: 10  },
              { label: "Orange", y: 15  },
              { label: "Banana", y: 25  },
              { label: "Mango",  y: 30  },
              { label: "Grape",  y: 28  }
          ]
         }]
     }

    const {selectedOption} = this.state;
    
    return ( 
        <div>
        <CanvasJSChart options = {options}
            /* onRef = {ref => this.chart = ref} */
        />
            <div>Current Location: {this.state.location_filter.label}</div>
            <form name = "locations" value = {selectedOption} onSubmit={this.handleSubmit}>
            <label>
            Place: 
            <Select 
              
              value = {selectedOption}
              onChange = {this.handleChange}
              options = {locations}
            />
            </label>
            <input type="submit" value="Submit" name = {this.state.value} />
            </form>
      </div>
    );
  }
}

export default Graphs;