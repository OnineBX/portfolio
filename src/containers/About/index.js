import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { actions, getAbout} from "../../redux/modules/about";
import style from './index.module.scss';

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
                        <img src={ process.env.PUBLIC_URL + this.props.about.image } alt="" />
                    </div>

                    <div>
                        <h2 className='subtitle'>{this.props.about.subtitle}</h2>
                        <div className="about__text" dangerouslySetInnerHTML={{__html:this.props.about.content}}></div>
                        {/* <p className="about__text">{this.props.about.content}</p>            */}
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
