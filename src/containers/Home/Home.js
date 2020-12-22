import React, { Component } from 'react'

import Header from '../Header';
import About from '../About';
import Skills from '../Skills';
import Education from '../Education';


export default class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <About />
                <Skills />
                <Education />
            </div>
        )
    }
}
