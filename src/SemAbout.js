import React, { Component } from 'react'
import logo from './hx.jpg'

export default class SemAbout extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
            <div className="pt-1" name="about">
                <div className="p-5 items-center text-center">
                    <div className="items-center text-center overflow-hidden">
                        <img src={logo} alt="footer image" className="inline-block object-cover"/>
                    </div>
                    <div className="p-12 text-4xl font-bold font-serif">
                        <div className="leading-10">Course Schedule Viewer</div>
                        <div className="text-sm font-sans font-thin pt-3">PHYNORMYNAL</div>
                    </div>
                    <button onClick={this.props.scrollToTop} className="transition duration-500 ease-in-out bg-blue-600 hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110 font-serif text-white  inline-block p-2 px-4 rounded-full">Back To Top</button>
                </div>
            </div>
    );
  }
}
