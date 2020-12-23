import React from 'react'
import TimelineItem from './TimelineItem';
import style from './index.module.scss';

export default function index(props) {
    let { data } = props;
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

