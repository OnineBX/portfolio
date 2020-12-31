import React from 'react';

import style from './index.module.scss';

export default function Footer() {
    return (
        <footer class={style.footer}>
            <p class={style.footer__title}>Ryan</p>
            <div class={style.footer__social}>
                <a href="#" class={style.footer__icon}><i class='fab fa-facebook-f' ></i></a>
                <a href="weixin://dl/chat?muzzyhorse" class={style.footer__icon}><i class='fab fa-weixin' ></i></a>
                <a href="#" class={style.footer__icon}><i class='fab fa-twitter' ></i></a>
            </div>
            <p>&#169; 2020 copyright all right reserved</p>
        </footer>
    )
}

