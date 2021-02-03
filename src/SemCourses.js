import React, { Component } from 'react';
import Writeup from './components/Writeup';

export default class SemCourses extends Component {
  render() {
    return (
        <div className="pt-1 bg-white text-left" name="courses">
          <div className="pl-16 text-3xl font-semibold text-gray-700">Courses</div>
          <div className="pl-16 pr-16 pb-16 items-center justify-between">
            <div className="text-lg py-5 text-gray-700 font-medium">CSC 102</div>
            <Writeup /> 
            <div className="">Lecturer(s):</div>
            <div className="">Mr. Babarinsa</div>
          </div>
        </div>
    );
  }
}