import React from 'react'

import TimelineItem from './TimelineItem';
import style from './index.module.scss';

export default function index(props) {
    let { data } = props;
    return (
        <div className={style.timeline}>
            <ul className={style.timeline__container}>
                {
                    data.map((item, idx) => (
                        <li className={style.timeline__container__item}>
                            <TimelineItem data={item} key={idx} />
                        </li>
                    ))
                }
            </ul>
            </div>
    )
}
