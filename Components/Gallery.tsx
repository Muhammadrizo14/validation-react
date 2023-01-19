import React from 'react';

import style from '../styles/gallery.module.scss'

const Gallery = () => {
    return (
        <div className={style.gallery} id="gallery">
            <h1 className={style.gallery__title}>Gallery</h1>
            <div className={style.grid}>
                <div className={style.grid__content}>
                    <div className={style.grid__content__block__1}>
                        <p>By the end of this course, you will be able to develop and publish your very own Google Chrome extension! In this course we will focus on coding exercises and projects.</p>
                    </div>
                    <div className={style.grid__content__block__2}>
                        <img src="./deve/1.png" alt=""/>
                    </div>
                    <div className={style.grid__content__block__3}>
                        <img src="./deve/2.png" alt=""/>
                    </div>
                    <div className={style.grid__content__block__4}>
                        <img src="./deve/4.png" alt=""/>
                    </div>
                    <div className={style.grid__content__block__5}>
                        <img src="./deve/3.png" alt=""/>
                    </div>
                    <div className={style.grid__content__block__6}>
                        <p>
                            If you would like to learn web development and get a job in
                            the tech industry, you are going to LOVE this course! Learn HTML, CSS, JavaScript, Bootstrap and
                            more with over 15 hours of HD video tutorials! This course was designed to be extremely beginner
                            friendly. We will begin with the very basics of HTML and build a simple web page.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;