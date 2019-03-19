import React, { Component } from 'react';
import Matrix from './Matrix.js'

export default class ColorSelector extends Component {

  makeColorSwatches = () => (
    ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((str, idx) => {
      colorChoice = (event) => {chosenColor(str)}
      return <div key={idx} className="color-swatch" style={{backgroundColor: str}} onClick={}/>
    })
  )

  render() {
    return (
      <div id="colorSelector">
        {this.makeColorSwatches()}
      </div>
    )
  }

}
