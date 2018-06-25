import React, { Component } from 'react';
import { SingleDatePicker } from 'react-dates';
import moment from 'moment';

import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';

import getComputerMove from './getComputerMove';

import './App.css';

class App extends Component {
  state = {
    date: moment(new Date((new Date()).getFullYear(), 0, 1)),
    computerDate: null,
    focused: false
  }

  newGame = () => {
    // reset state
    this.setState({

    });
  }

  render() {
    return (
      <div className="App">
        <h1>Joulukuun 31. Päivä</h1>

        <SingleDatePicker
          focused={this.state.focused}
          onFocusChange={({focused}) => this.setState({focused})}
          numberOfMonths={1}
          hideKeyboardShortcutsPanel={true}
          displayFormat='D.M.Y'
          isOutsideRange={day => day.year() !== (new Date()).getFullYear()}
          date={this.state.date}
          onDateChange={date => {
            const computerDate = getComputerMove(date);

            // check date validity

            // check if player got 31.12.2018
            // check if computer got 31.12.2018

            this.setState({date, computerDate})
          }}
        />
        <button onClick={this.newGame} className="button">Uusi peli</button>
      </div>
    );
  }
}

export default App;
