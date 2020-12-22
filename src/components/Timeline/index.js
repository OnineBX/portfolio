import React, { Component } from 'react';

import TimelineItem from './TimelineItem';
import style from './index.module.scss';

export default class Timeline extends Component {
    render() {
        console.log(this.props);
        let { data } = this.props;
        return (
            <div className={style.timeline__container}>
                {
                    data.map((item, idx) => (
                        <TimelineItem data={item} key={idx} />
                    ))
                }
            </div>
        )
    }
}
