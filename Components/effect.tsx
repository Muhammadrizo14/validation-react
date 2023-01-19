import React from 'react';
import style from '../styles/effect.module.scss'
import {Ieffect} from "../types/Ieffect";


const Effect = (props : Ieffect) => {
    console.log(typeof props.props)
    console.log(props)
    // Я получаю положения Эффекта например props={{bottom: '207px', left: '83px'}}

    return (
        <div className={style.effect} style={props.props}>
            <img className={style.effect__image__shadow}  src="./effectshadow.png" alt=""/>
            <img  className={style.effect__image__star} src="./effectstar.png" alt=""/>
        </div>
    );
};

export default Effect;