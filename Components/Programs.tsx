import React from 'react';
import style from '../styles/programs.module.scss'
import Effect from "./effect";
import Program from "./program";


const Programs = () => {
    return (
        <div className={style.programs__container} id="programs">
            <Effect props={{left: '83px'}} />
            <Effect props={{right: '83px'}} />
            <div className={style.programs}>
                <h1 className={style.programs__title}>Programming technologies</h1>
                <p className={style.programs__subtitle}>By the end, you’ll have the portfolio and interview skills you need to start your new career.</p>
                <div className={style.programs__wrap}>
                    <Program program='./programs/angular.png' programName='Angular' />
                    <Program program='./programs/react.png' programName='React' />
                    <Program program='./programs/vue.png' programName='Vue.js' />
                    <Program program='./programs/js.png' programName='JavaScript' />
                </div>
            </div>
        </div>
    );
};

export default Programs;