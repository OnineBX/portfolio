import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getHome, actions } from '../../redux/modules/home';
import style from './index.module.scss';

class Home extends Component {
    render() {
        let {home} = this.props;
        console.log(this.props);
        return (
            <section className={`${style.home} bd-grid`} id="home">
                <div className={style.home__data}>
                    <h1 className={style.home__title}>Hi,<br/>I'am <span className={style["home__title-color"]}>{home.profileName}</span><br/> Software Engineer</h1>
                    
                </div>
                <div className={style.home__detail}>
                    <div className={style.home__social}>
                        {home.social.map((item, idx) => (
                            <a href={item.url} className={style["home__social-icon"]} key={idx}>
                                <i className={item.icon} ></i>
                                <span>{item.content}</span>
                            </a>
                        ))}
                    </div>

                    <div className={style.home__img}>    
                        <img src={process.env.PUBLIC_URL + home.profilePic} alt="" />
                    </div>
                </div>
                
            </section>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        home: getHome(state)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        ...bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);
