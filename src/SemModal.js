import React, { Component } from 'react';
import EventsCalender from './EventsCalender';
import './calender.css'

export default class SemModal extends Component {
  render() {
    return (
            <div className="pt-1 bg-white text-left z-10" name="semester1">
              <div className="pl-16 pb-8 text-3xl font-semibold text-gray-700">Course Schedule</div>
              <div className="text-xl font-sans font-thin pl-16">View course schedule according to courses.</div>
              <div className="flex flex-row p-10 items-center justify-between">
                <EventsCalender />
              </div>
            </div>
    );
  }
}
