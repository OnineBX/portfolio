import React from 'react';

import style from './index.module.scss';

export default function index(props) {
    let {data} = props;
    return (
        <div className={style.card__container}>
            <div className={style.image__container}>
                <img src={process.env.PUBLIC_URL + data.icon} />
            </div>
            <h3>{data.title}</h3>
            <p style = {{whiteSpace:'pre-wrap' }}>{data.text}</p>
        </div>
    )
}
