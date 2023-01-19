import React, {useState} from 'react';

import style from '../styles/accardion.module.scss'

const Accardion = () => {

    const [open, setOpen] = useState(false)

    return (
        <div className={style.accardion}>
            <div className={style.accardion__wrap} onClick={()=> setOpen(!open)} style={{cursor: "pointer"}}>
                <h3 className={style.accardion__wrap__title}>What is the price?</h3>
                <img className={style.accardion__wrap__reopen} src={open ? "./minus.png" : "./plus.png"} alt=""/>
            </div>
            {open && <p className={style.accardion__text}>Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.</p>}
        </div>
    );
};

export default Accardion;