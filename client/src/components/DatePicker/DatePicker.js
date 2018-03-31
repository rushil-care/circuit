import React, { Fragment, PureComponent } from 'react';
import { DatePicker } from 'material-ui-pickers';
import './DatePicker.css';

export default class BasicUsage extends PureComponent {
  state = {
    selectedDate: null,
  }

  handleDateChange = (date) => {
    this.setState({ selectedDate: date });
  }

  render() {
    const { selectedDate } = this.state;

    return (
      <Fragment>

        <div className="picker" className="picker-custom">
          <DatePicker
            keyboard
            label="Date of Birth"
            format="DD/MM/YYYY"
            autoOk = "true"
            placeholder ="DD/MM/YYYY"
            mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
            value={selectedDate}
            onChange={this.handleDateChange}
            animateYearScrolling={false}
          />
        </div>
      </Fragment>
    );
  }
}
