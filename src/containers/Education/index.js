import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Card from '../../components/Card';
import { getEducation, actions } from '../../redux/modules/education';

import style from './index.module.scss';

class Education extends Component {

    componentDidMount(){
        this.props.load();
    }
    
    render() {
        let {data} = this.props.education;
        return (
            <section className={`${style.education} section`} id='education'>
                <h2 className='section-title'>Education</h2>
                <div className={`${style.education__container} bd-grid`}>
                    {
                    data.map((item, idx) => (
                        <Card data={item} key={idx}/>
                    ))
                }
                </div>
            </section>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        education: getEducation(state)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        ...bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Education);
