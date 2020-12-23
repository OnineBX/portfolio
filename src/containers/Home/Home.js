import React, { Component } from 'react'

import Header from '../Header';
import About from '../About';
import Skills from '../Skills';
import Education from '../Education';
import Work from '../Work';


export default class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <About />
                <Skills />
                <Education />
                <Work />
            </div>
        )
    }
}
