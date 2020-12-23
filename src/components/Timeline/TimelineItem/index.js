import React from 'react'

import style from "./index.module.scss";

export default function TimelineItem(props) {
    return (
        <div className={style['timeline-item']}>
            <div className={style['timeline-item__content']}>
                <time>{props.data.time}</time>
                <p>{props.data.time}</p>
                {
                    props.data.projects.map((item, ipx) => (
                        <a href={item.link} target='_blank' rel='noopener noreferrer'>
                        {item.title}
                        </a>
                    ))
                    
                }
                <span className={style.circle}></span>
            </div>
        </div>
    )
}

