import React from 'react';

import style from '../styles/question.module.scss'
import Accardion from "./accardion";
import Effect from "./effect";


const Question = () => {
    return (
        <div id="questions" className={style.question}>
            <h1 className={style.question__title}>Frequently Asked Questions</h1>
            <div className={style.question__info}>
                <div className={style.question__info__question__mark}>
                    <p className={style.question__info__question__mark__subtitle}>
                        Do you have any kind of questions? <br/> We are here to help.
                    </p>
                    <img className={style.question__info__question__mark__image} src="./question.png" alt=""/>
                </div>
                <div className={style.question__info__questions}>
                    <Accardion/>
                    <Accardion/>
                    <Accardion/>
                    <Accardion/>
                    <Accardion/>
                </div>
            </div>
            <Effect props={{left: '30%'}} />


        </div>
    );
};

export default Question;