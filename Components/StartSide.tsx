import React from 'react';
import style from '../styles/StartSide.module.scss'
import Effect from "./effect";

const StartSide = () => {
    return (
        <div className={style.start__container}>
            <div className={style.start__info}>
                <h1 className={style.start__info__title}>Front-End </h1>
                <p className={style.start__info__subtitle}>Make UIs and websites beautiful, functional, and fast. Cover all the topics that expensive bootcamps teach (and more). </p>
            </div>
            <div className={style.start__info}>
                <button className={style.start__info__button}>Start my career change</button>
                <h1 className={style.start__info__title}>Developer</h1>
            </div>
            <h3 className={style.curses}>Courses</h3>
            <Effect props={{bottom: '207px', left: '83px'}} />
            <Effect props={{bottom: '207px', right: '83px'}} />
        </div>
    );
};

export default StartSide;