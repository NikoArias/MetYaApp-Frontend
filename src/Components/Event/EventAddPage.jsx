import { React, Component } from "react";
import Select from "react-select";
import { format } from 'date-fns'
import { enGB } from 'date-fns/locale'
import { DatePickerCalendar } from 'react-nice-dates'
import 'react-nice-dates/build/style.css'
import TimePicker from 'react-time-picker';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


// https://www.w3resource.com/javascript-exercises/javascript-date-exercise-6.php
function addMinutes(dt, minutes) {
    return new Date(dt.getTime() + minutes*60000);
}

class EventAddPage extends Component{
  constructor(props){
    super(props);

    this.state = {
      showCalendarPickModal: false,
      startTime: null,
      endTime: null,
      date: null,
      time: null,
      dateTime: null,
      timeSelections: [],
          timeOptions: [
            {value: 1, label:"1:00Am"},
            {value: 2, label:"2:00Am"},
            {value: 3, label:"3:00Am"},
            {value: 4, label:"4:00Am"},
            {value: 5, label:"5:00Am"},
            {value: 6, label:"6:00Am"},
            {value: 7, label:"7:00Am"},
            {value: 8, label:"8:00Am"},
            {value: 9, label:"9:00Am"},
            {value: 10, label:"10:00Am"},
          ],
      filterSelections: [],
          filterOptions: [
               {value:"library", label:"Library"},
               {value:"pub", label:"Pub"},
               {value:"party", label:"Party"},
               {value:"park", label:"Park"},
               {value:"mall", label:"Mall"},
            ],
    }

    this.onMultiSelectClick = this.onMultiSelectClick.bind(this);
    this.onSubmitClick = this.onSubmitClick.bind(this);
    this.onShowOpenCalendarPickModal = this.onShowOpenCalendarPickModal.bind(this);
    this.onHideOpenCalendarPickModal = this.onHideOpenCalendarPickModal.bind(this);
    this.onCalendarPickDateChange = this.onCalendarPickDateChange.bind(this);
    this.onSubmitClick = this.onSubmitClick.bind(this);
    this.onStartTimeChange = this.onStartTimeChange.bind(this);
    this.onEndTimeChange = this.onEndTimeChange.bind(this);
    this.onTimeSelectClick = this.onTimeSelectClick.bind(this);
    this.onConfirmButtonClick = this.onConfirmButtonClick.bind(this);

  }

  onConfirmButtonClick(e){
    const { date, time } = this.state

    const minutes = 60 * time;

    const newDate = addMinutes(date, minutes);

       console.log("your date is:", newDate);

    this.setState ({
      dateTime:newDate,
      showCalendarPickModal: false,
    })
  }

  onCalendarPickDateChange(pickedDate) {
        this.setState({
            date: pickedDate,
        });
    }

  onShowOpenCalendarPickModal() {
       this.setState({
           showCalendarPickModal: true,
       });
   }

   onHideOpenCalendarPickModal() {
         this.setState({
             showCalendarPickModal: false,
         });
     }
  onMultiSelectClick(selectedOptions) {
        console.log(selectedOptions);
        this.setState({
            filterSelections: selectedOptions,
        });
  }
  onTimeSelectClick(timeSelected){
    console.log(timeSelected)
    this.setState({
      time: timeSelected.value,
    })
  }

    onSubmitClick(e) {
        console.log("You selected the following filters:");
        const { filterSelections } = this.state;
        const values = [];
        for (let filterOption of filterSelections) {
            values.push(filterOption.value);
        }
        console.log(values);
  }

  onStartTimeChange(e){
    console.log(e)
    this.setState({
      startTime: e,
    })
  }

  onEndTimeChange(e){
    console.log(e)
    this.setState({
      endTime: e,
    })
  }

  render(){
    const { startTime, endTime, filterOptions, showCalendarPickModal, date, timeOptions, dateTime} = this.state
    return(
      <>
      <div className="w3-row">
        <div className="w3-col s4 w3-container w3-padding">
        <button className="w3-btn w3-round w3-white w3-border-black w3-border">Back</button>
        </div>
        <div className="w3-col s4 w3-container w3-center">
            <h4><strong>My Event </strong></h4>
        </div>
        <div className="w3-col s4 w3-container w3-padding">
        </div>
      </div>
        <hr className="w3-black"/>

        <div className="w3-container">
         <div className="w3-white w3-container w3-round-xlarge">
         <br />
         <label><strong>Add event </strong> <i class="fa fa-plus" aria-hidden="true"></i></label>
          <p>
            <label> Event Name</label>
            <input className="w3-input" type="text" name="username"/>
          </p>
          <p>
            <label>Adress</label>
            <input className="w3-input" type="text" name="username"/>
          </p>
          <p>
            <label> Postal Code</label>
            <input className="w3-input" type="text" name="username"/>
          </p>
         </div>
        </div>
        <br />
        <form className="w3-container">
          <label>Filters  <i class="fa fa-filter" aria-hidden="true"></i></label>
          <Select options={filterOptions} onChange={this.onMultiSelectClick} isMulti={true} />
        </form>
        <br />
        <form className="w3-container">
        {/* MODAL BEGIINS */}
              {showCalendarPickModal && <div id="id01" className="w3-modal" style={{display: showCalendarPickModal ? "block" : "none",}}>
                  <div className="w3-modal-content">
                    <div className="w3-container">
                        <span className="w3-button w3-display-topright" onClick={this.onHideOpenCalendarPickModal}>&times;</span>
                          <br /> <br />
                          <h4>Please pick a date:</h4>
                          <DatePickerCalendar locale={enGB} onDateChange={this.onCalendarPickDateChange} date={date} />
                    </div>
                    <hr />
                    <form className="w3-container">
                      <label>Time</label>
                      <Select options={timeOptions} onChange={this.onTimeSelectClick} isMulti={false} />
                    </form>
                    <br />
                      <button type="button"className="w3-button w3-black w3-block" onClick={this.onConfirmButtonClick}> Confirm</button>
                  </div>
                </div>}
                {/* MODAL ENDS */}
                <br />
                <label>Pick Date/Time  <i class="fa fa-calendar" aria-hidden="true"></i></label>
                <br />
                {/* Note on formats: https://www.section.io/engineering-education/javascript-dates-manipulation-with-date-fns/ */}
                <input className="w3-input"
                            type="text"
                         onClick={this.onShowOpenCalendarPickModal}
                     placeholder="Please choose the date."
                           value={dateTime ? format(dateTime, 'EEEE,MMMM do, yyyy hh:mm a', { locale: enGB }) : 'none'}
                />
             </form>

             <br />
             <div className="w3-container">
              <div className="w3-white w3-container w3-round-xlarge">
              <br />
              <label><strong>Event Description </strong> <i class="fa fa-fire" aria-hidden="true"></i></label>
               <p>
                 <label> Host Rules (*)</label>
                 <textarea className="w3-input" type="text" name="username" rows={10}></textarea>
               </p>
              </div>
              <br /><br />
              <p>
                <button className="w3-btn w3-black w3-block w3-margin-bottom">Update Event</button>
                <Link to="/dashboard" className="w3-btn w3-red w3-block">Cancel Event</Link>
              </p>
             </div>
             <br /><br /><br />



      </>
    )
  }
}


export default EventAddPage;
