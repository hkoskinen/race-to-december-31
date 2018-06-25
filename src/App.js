import React, { Component } from 'react';
import { SingleDatePicker } from 'react-dates';
import moment from 'moment';

import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';

import './App.css';

class App extends Component {
  state = {
    date: moment(new Date((new Date()).getFullYear(), 0, 1)),
    focused: false
  }
  render() {
    return (
      <div className="App">
        <h1>Race to December 31</h1>

        <SingleDatePicker
          date={this.state.date}
          onDateChange={date => this.setState({date})}
          onFocusChange={({focused}) => this.setState({focused})}
          focused={this.state.focused}
          numberOfMonths={1}
          hideKeyboardShortcutsPanel={true}
        />
      </div>
    );
  }
}

export default App;
