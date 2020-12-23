import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actions, getWork} from '../../redux/modules/work'

import Timeline from '../../components/Timeline';
import style from './index.module.scss';

class Work extends Component {

    componentDidMount(){
        this.props.load();
    }

    render() {
        let work = this.props.work;
        console.log(this.props);
        return (
            <section className={`${style.work} section`} id='work'>
                <h2 className='section-title'>Work</h2>
                <div className={`${style.work__container} bd-grid`}>
                    <Timeline data = {work.data} />
                </div>
            </section>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        work: getWork(state)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        ...bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Work);
