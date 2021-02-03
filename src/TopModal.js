import React, { Component } from 'react';
import logo from './logo512.png'

export default class TopModal extends Component {
  render() {
    return (
        <div className="pt-1">
            <div className="flex flex-row bg-white p-5 pb-16 items-center justify-between">
                <div className="text-gray-700 w-2/5 p-12 text-6xl font-bold font-serif">
                    Course Calender accross all semesters of 2020/21 session
                    <div className="text-xl font-sans font-thin pt-3">Get to check all the schedules for the whole simester with a single click!</div>
                </div>
                <div className="w-3/5 h-96 relative">
                    <span className="flex h-3 w-3 z-0">
                        <span className="animate-bounce absolute inline-flex h-5/6 w-5/6 rounded-full bg-purple-100 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-transparent"></span>
                    </span>
                    <img src={logo} alt="logo512.png" className="object-cover" style={{position: 'relative', left:'-44px', top: '-84px'}}/>
                </div>
            </div>
        </div>
    );
  }
}