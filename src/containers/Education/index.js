import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Zmage from 'react-zmage';

import Card from '../../components/Card';
import { getEducation, actions } from '../../redux/modules/education';

import style from './index.module.scss';

class Education extends Component {

    componentDidMount(){
        this.props.load();
    }
    
    render() {
        let {history, award} = this.props.education;
        return (
            <section className={`${style.education} section`} id='education'>
                <h2 className='section-title'>Education</h2>
                
                <div className='bd-grid'>
                    <h2 className='subtitle'>History</h2>
                    <div className={style.education__container}>
                        {
                            history.map((item, idx) => (
                                <Card data={item} key={idx}/>
                            ))
                        }
                    </div>
                    <h2 className='subtitle'>Award</h2>
                    <div className={style.award__container}>
                        {
                            award.map((item, idx) => (
                                <div className={style.award__item}>
                                    <Zmage src={process.env.PUBLIC_URL + item.image}></Zmage>
                                    <h4>{item.title}</h4>
                                </div>
                            ))
                        }
                    </div>
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
