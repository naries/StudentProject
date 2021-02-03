import Header from './Header'
import './App.css';
import TopModal from './TopModal';
import SemModal from './SemModal';
import { Element } from 'react-scroll';
import { Component } from 'react';
import {Events, animateScroll as scroll, scrollSpy  } from 'react-scroll'
import SemAbout from './SemAbout';
import SemCourses from './SemCourses';


class App extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    Events.scrollEvent.register('begin', function() {
      console.log('begin', arguments)
    })
    Events.scrollEvent.register('end', function() {
      console.log('end', arguments)
    })

    scrollSpy.update()
  }

  scrollToTop() {
    scroll.scrollToTop()
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin')
    Events.scrollEvent.remove('end')
  }
  render() {
    return (
      <div className="App">
        <Element name="App" className="element"  id = "App">
          <div className="bg-gray-200 h-auto">
            <div className="p-24 pt-8 border-gray-400">
              <Header />
              <TopModal />
              <SemModal />
              <SemCourses />
              <SemAbout scrollToTop = {this.scrollToTop}/>
            </div>
          </div>
        </Element>
      </div>
    );
  }
}

export default App;
