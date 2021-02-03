import React, { Component } from 'react'
import logo from './logo.jpeg'
import { Link } from 'react-scroll'

export default class Header extends Component {
  constructor(props) {
    super(props)
  }


  render() {
    return (<>
        <div className="mb-4 bg-white rounded-full p-4 overflow-hidden inline-block">
            <img src={logo} alt="school logo" className="object-contain w-32 h-32"/>
        </div>
        <div className="flex flex-row bg-white p-5 items-center justify-between">
          <div className="flex flex-row text-left items-center space-x-2">
            <div className="rounded-full h-6 w-6 bg-gray-600 mr-2"></div>
            <div className="font-sans text-sm text-black inline-block">Mayokun</div>
          </div>
          <div className="flex flex-row">
            <div>Federal Polytechnic, Ukana</div>
          </div>
          <div className="flex flex-row text-sm text-gray-700 space-x-3">
            <div className=""><Link activeClass="bg-gray-700" to="semester1" spy={true} smooth={true} duration={450} delay={200}>Schedule</Link></div>
            <div className=""><Link activeClass="bg-gray-700" to="courses" spy={true} smooth={true} duration={650} delay={200}>Courses</Link></div>
            <div className=""><Link activeClass="bg-gray-700" to="about" spy={true} smooth={true} duration={750} delay={200}>About</Link></div>
          </div>
        </div>
        </>
    );
  }
}
