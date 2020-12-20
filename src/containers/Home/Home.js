import React, { Component } from 'react'

import Header from '../Header';
import About from '../About';
import Skills from '../Skills';


export default class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <About />
                <Skills />
            </div>
        )
    }
}
