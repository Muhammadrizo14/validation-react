import React from 'react';
import style from '../styles/about.module.scss'
import MentorCard from "./mentorCard";
import Effect from "./effect";

const About = () => {
    return (
        <div className={style.about__wrapper} id="about">
            <div className={style.about} data-aos="fade-up">
                <h1 className={style.about__title}  data-aos="fade-up">About Us</h1>
                <div className={style.about__content}>
                    <div className={style.about__info}>
                        <h3 className={style.about__info__title}>Mentors</h3>
                        <div>
                            <img src="./line.png" alt=""/>
                        </div>
                        <div className={style.mentors}>
                            <MentorCard mentor='./mentors/1.png' name='Wade Warren' desc="Front-end engineers work closely with designers"/>
                            <MentorCard mentor='./mentors/2.png' name='Kristin Watson' desc="Front-end engineers work closely with designers" />
                            <MentorCard mentor='./mentors/3.png' name='Robert Fox' desc="Front-end engineers work closely with designers" />
                        </div>
                    </div>
                    <Effect props={{left: '0'}} />
                    <Effect props={{right: '0', bottom: '30px'}} />
                    <div className={style.about__text}>
                        <p className={style.about__text__paragraph}>Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.</p>
                        <h1 className={style.about__text__title}>Front</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;