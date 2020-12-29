import React, { Component } from 'react';

import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getSkills, actions } from '../../redux/modules/skills';

import style from './index.module.scss';

import AbilityBar from './components/AbilityBar';

class Skills extends Component {

    render() {
        let skills = this.props.skills;

        return (
            <section className={`${style.skills} section`} id='skills'>
                <h2 className='section-title'>Skills</h2>
                <div className={`${style.skills__container} bd-grid`}>
                {
                    skills.map((skill, idx) => (
                            <div key={idx}>
                                <h2 className={style.skills__subtitle}>{skill.title}</h2>
                                <p className={style.skills__text}>{skill.content}</p>
                                <div className={style.skills__data}>
                                    <div>
                                        <h4>{skill.radar.title}</h4>
                                        <div>
                                            <RadarChart
                                                captions={skill.radar.captions}
                                                data={skill.radar.details}
                                                options={skill.radar.options}/>
                                        </div>
                                    </div>
                                    <div>
                                        <h4>{skill.bar.title}</h4>
                                        <div>
                                            {
                                                skill.bar.details.map((item, idx) => (
                                                    <AbilityBar name={item.title} icon={item.icon} percentage={item.percent} key={idx} />
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                                  
                        </div>
                    
            )) }
                </div>
            </section>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        skills: getSkills(state),
    }
}

const mapDispatchToProps = dispatch => {
    return {
        ...bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Skills);

