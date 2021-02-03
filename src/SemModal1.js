import React, { Component } from 'react';
import * as Scroll from 'react-scroll'
import {Element} from 'react-scroll'
import logo from './ttable1.jpg'

export default class SemModal1 extends Component {
  render() {
    return (
            <div className="pt-1" name="semester2">
                <div className="flex flex-row bg-white p-5 items-center justify-between">
                    <div className="w-2/5 p-12 text-6xl font-bold font-serif">
                        Course Calender accross all semesters of 2020/21 session
                        <div className="text-xl font-sans font-thin pt-3">Get to check all the schedules for the whole simester with a single click!</div>
                    </div>
                
                    <div className="w-3/5 h-96 overflow-hidden">
                        <img src={logo} alt="student_logo" className="object-cover"/>
                    </div>
                </div>
            </div>
    );
  }
}
