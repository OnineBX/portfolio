import React from 'react'

import style from "./index.module.scss";

export default function TimelineItem(props) {
    let {data} = props;
    return (
        <div className={style['timeline-item']}>
            <h4 className={style['timeline-item__time']}>{data.time}</h4>
            <div className={style['timeline-item__tag-container']}>
                {
                data.tags && (data.tags.map((tItem, tIdx) => (
                    <span className={style['timeline-item__tag']}>{tItem}</span>
                )))
                }
            </div>
            <div className={style['timeline-item__content']}>
                <h3>{data.title}</h3>
                {
                    data.content && data.content.map((cItem, cIdx) => (
                        <div>
                            <h4><i>{cItem.company}</i></h4>
                            <p>{cItem.text}</p>
                            { 
                                cItem.projects && (
                                    <div>
                                        <div className={style['timeline-item__project-title']}>Projects:</div>
                                        <ul>
                                        {
                                            cItem.projects.map((item, ipx) => (
                                                <li className={style['timeline-item__project']}>
                                                    <a href={item.link} target='_blank' rel='noopener noreferrer'>
                                                        {item.title}
                                                        <i className={item.icon}></i>
                                                    </a>
                                                </li>
                                            ))
                                        }
                                        </ul>
                                    </div>)
                    
                            }
            </div>
                    ))
    }
                
                
                
    </div>
            
        </div>
        // <div className={style['timeline-item']}>
        //     <time>{props.data.time}</time>
        //         <p>{props.data.time}</p>
        //         {
        //             props.data.projects.map((item, ipx) => (
        //                 <a href={item.link} target='_blank' rel='noopener noreferrer'>
        //                 {item.title}
        //                 </a>
        //             ))
                    
        //         }
        // </div>
    )
}

