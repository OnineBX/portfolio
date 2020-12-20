import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actions, getOpenFlag, getSelectedIndex } from '../../redux/modules/header'

import style from './index.module.scss'

class Header extends Component {

    handleToggle = () => {
        if(this.props.isOpen === true) {
            this.props.closeMenu();
        }else{
            this.props.openMenu();
        }
    }

    handleClick = (event) => {
        let index = event.currentTarget.getAttribute('href');
        this.props.selectItem(index);
    }

    render() {
        return (
            <header className={style.header}>
                <nav className={`${style.nav} bd-grid`}>
                    <div>
                        <a className={style.nav__logo}>Ryan</a>
                    </div>
                    <div className={ `${style.nav__menu} ${this.props.isOpen ? style.show: ""}` }>
                            <ul className={style.nav__list}>
                                <li index='home' className={style.nav__item}><a href="#home" onClick={this.handleClick} className={`${style.nav__link} ${this.props.selectedIndex==='#home' ? style.active: ""}`}>Home</a></li>
                                <li index='about' className={style.nav__item}><a href="#about" onClick={this.handleClick} className={`${style.nav__link} ${this.props.selectedIndex==='#about' ? style.active: ""}`}>About</a></li>
                                <li index='skills' className={style.nav__item}><a href="#skills" onClick={this.handleClick} className={`${style.nav__link} ${this.props.selectedIndex==='#skills' ? style.active: ""}`}>Skills</a></li>
                                <li index='work' className={style.nav__item}><a href="#work" onClick={this.handleClick} className={`${style.nav__link} ${this.props.selectedIndex==='#work' ? style.active: ""}`}>Work</a></li>
                                <li index='education' className={style.nav__item}><a href="#education" onClick={this.handleClick} className={`${style.nav__link} ${this.props.selectedIndex==='#education' ? style.active: ""}`}>Education</a></li>
                            </ul>
                    </div>
                    <div className={style.nav__toggle} onClick = { this.handleToggle }>
                        <i className='bx bx-menu'></i>
                    </div>
                </nav>
            </header>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        isOpen: getOpenFlag(state),
        selectedIndex: getSelectedIndex(state)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        ...bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);

