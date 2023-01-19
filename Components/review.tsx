import React from 'react';

import style from '../styles/review.module.scss'

const Review = () => {
    return (
        <div className={style.review} id="review">
            <h1 className={style.review__title}>Review</h1>
            <div className={style.review__info}>
                <div className={style.review__info__text}>
                    <h3 className={style.review__info__text__title}>Best courses ever</h3>
                    <p className={style.review__info__text__subtitle}>Good course, up to this point, still ongoing. The only downside, why I gave 4,5 stars, because the "teacher" sometimes feel like, he is lost, and takes up quite a time, to correct himself, and check back etc.</p>
                </div>
                <div className={style.review__info__slider}>
                    <div className={style.review__info__slider__wrapp}>
                        <h3 className={style.review__info__slider__wrapp__pagination}> 1 / <sup>3</sup></h3>
                        <div className={style.review__info__slider__wrapp__btns}>
                            <button>
                                ❮
                            </button>
                            <button>
                                ❯
                            </button>
                        </div>
                    </div>
                    <div className={style.review__info__slider__slides}>
                        <img className={style.review__info__slider__slides__slide} src="./review/1.png" alt=""/>
                        <img className={style.review__info__slider__slides__slide} src="./review/2.png" alt=""/>
                        <img className={style.review__info__slider__slides__slide} src="./review/3.png" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;