import React, { Component } from 'react'

import style from "./index.module.scss";

export default class AbilityBar extends Component {
    render() {
        let { name, icon, percentage } = this.props;
        return (
            <div className={style.abar__data}>
                <div className={style.abar__names}>
                    <i className={`bx ${icon} ${style.abar__icon}`}></i>
                    <span className={style.abar__name}>{name}</span>
                </div>
                <div className={style.abar__bar} style={{width: percentage}}></div>
                <div>
                    <span className={style.abar__percentage}>{percentage}</span>
                </div>
                
            </div>
        )
    }
}
