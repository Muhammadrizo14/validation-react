import React from 'react';
import style from '../styles/mentor.module.scss'
import {Imentor} from '../types/Imentor'


const MentorCard = ({mentor, name, desc} : Imentor) => {
    return (
        <div className={style.mentors__card}>
            <img className={style.mentors__card__image} src={mentor} alt=""/>
            <div className={style.mentors__card__info}>
                <h3 className={style.mentors__card__info__title}>{name}</h3>
                <p className={style.mentors__card__info__subtitle}>{desc}</p>
            </div>
        </div>
    );
};

export default MentorCard;