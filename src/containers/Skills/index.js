import React, { Component } from 'react';

import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css';

import style from './index.module.scss';

export default class Skills extends Component {
    render() {

        const data = [
            {
              data: {
                battery: 0.7,
                design: .8,
                useful: 0.9,
                speed: 0.67,
                weight: 0.8
              },
              meta: { color: 'blue' }
            },
            {
              data: {
                battery: 0.6,
                design: .85,
                useful: 0.5,
                speed: 0.6,
                weight: 0.7
              },
              meta: { color: 'red' }
            }
        ];
      
        const captions = {
            // columns
            battery: 'Architect Competence',
            design: 'Mobile End',
            useful: 'DevOps',
            speed: 'Back End',
            weight: 'Front End'
        };

        const options = {
            scales:5
        };
        

        return (
            <section className={`${style.skills} section`} id='skills'>
                <h2 className='section-title'>Skills</h2>
                <div className={`${style.skills__container} bg-grid`}>
                    <div>
                        <h2 className={style.skills__subtitle}>Professional Skills</h2>
                        <p className={style.skills__text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit optio id vero amet, alias architecto consectetur error eum eaque sit.</p>
                        <div className={style.skills__data}>
                            <RadarChart
                                captions={captions}
                                data={data}
                                options={options}/>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
