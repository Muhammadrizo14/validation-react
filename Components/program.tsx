import React from 'react';
import style from '../styles/program.module.scss'
import {Iprogram} from "../types/Iprogram";



const Program = ({program,programName }: Iprogram) => {
    return (
        <div className={style.program}>
            <img className={style.program__image} src={program} alt=""/>
            <h6 className={style.program__title}>{programName}</h6>
        </div>
    );
};

export default Program;


// localhost:3256/user/dior