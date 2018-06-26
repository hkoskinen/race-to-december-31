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
    focused: false,
    moves: []
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
            if (date.isSame(moment('2018-12-31'))) {
              console.log('player won');
            } else if (computerDate.isSame(moment('2018-12-31'))) {
              console.log('computer won');
            }
            date.playerMove = true;

            this.setState({date, computerDate, moves: [...this.state.moves, date, computerDate]});
            console.log(this.state.moves);
          }}
        />


        <h3>Tietokoneen viimeisin valinta</h3>
        <p>{this.state.computerDate && this.state.computerDate.format('D.M.Y').toString()}</p>

        <button onClick={this.newGame} className="button">Uusi peli</button>
      </div>
    );
  }
}

export default App;
