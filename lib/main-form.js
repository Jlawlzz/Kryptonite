const React = require('react');
import TimerStore from './timer-store';
import { ipcRenderer } from 'electron';

const MainForm = React.createClass({

  handleSubmit(e) {
    e.preventDefault();
    TimerStore.setUserIntervals(this.refs.workTimer.value, this.refs.pomoTimer.value);
    TimerStore.toggleActive();
    TimerStore.initiateTimer();
  },

  render() {

    return(
      <div className="time-interval-form">
        <h3>Work Interval</h3>
        <form>
          <input
           defaultValue= ''
           ref='workTimer'
           type='number'
           className="work-interval-form"
          />
        <p>minutes</p>
        <h3>Break Interval</h3>
          <input
           defaultValue= ''
           ref='pomoTimer'
           type='number'
           className="pomo-interval-form"
          />
          <p>minutes</p>
         <p><button onClick={this.handleSubmit}>Start Timer</button></p>
        </form>
      </div>
    );
  },
});



module.exports = MainForm;