import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { actions, getAbout} from "../../redux/modules/about"
import style from './index.module.scss'
import ImgAbout from './images/about.jpg'

class About extends Component {
    static propTypes = {
        content: PropTypes.string
    }

    componentDidMount() {
        this.props.load();
    }

    render() {
        
        return (
            <section className={`${style.about} section`} id='about'>
                <h2 className="section-title">About</h2>
                <div className={`${style.about__container} bd-grid`}>
                    <div className={style.about__img}>
                        <img src={ ImgAbout } alt="" />
                    </div>

                    <div>
                        <h2 className={style.about__subtitle}>{this.props.about.subtitle}</h2>
                        <p className="about__text">{this.props.about.content}</p>           
                    </div>
                </div>
            </section>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        about: getAbout(state)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        ...bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(About);
