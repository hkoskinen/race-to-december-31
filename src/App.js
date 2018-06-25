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
  render() {
    return (
      <div className="App">
        <h1>Race to December 31</h1>

        <SingleDatePicker
          focused={this.state.focused}
          onFocusChange={({focused}) => this.setState({focused})}
          numberOfMonths={1}
          hideKeyboardShortcutsPanel={true}
          displayFormat='DD.MM.YYYY'
          isOutsideRange={day => day.year() !== (new Date()).getFullYear()}
          date={this.state.date}
          onDateChange={date => {
            const computerDate = getComputerMove(date);
            this.setState({date, computerDate})
          }}
        />
      </div>
    );
  }
}

export default App;
