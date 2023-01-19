import React from 'react';
import style from '../styles/footer.module.scss'
import Link from "next/link";

const Footer = () => {
    return (
        <div className={style.footer__wrapp}>
            <div className={style.footer}>
                <ul className={style.footer__info}>
                    <li>
                        <Link href="/">
                            <img src="./logo.png" alt=""/>
                        </Link>
                    </li>
                    <li>
                        <p>
                            Wisconsin Ave, Suite 700
                            Chevy Chase, Maryland 20815
                        </p>
                    </li>
                </ul>
                <ul className={style.footer__company}>
                    <li>
                        <p>Company</p>
                    </li>
                    <li>
                        <Link href="#about">
                            <p>About Us</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="#steps">
                            <p>Steps</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="#questions">
                            <p>FAQs</p>
                        </Link>
                    </li>
                </ul>
                <ul className={style.footer__none}>
                    <li>
                        <Link href="#review">
                            <p>Review</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="#gallery">
                            <p>Gallery</p>
                        </Link>
                    </li>
                </ul>
                <ul className={style.footer__media}>
                    <li><p>Social media</p></li>
                    <div className={style.footer__media__icons}>
                        <li>
                            <Link target="_blank" href="https://www.facebook.com/">
                                <img src="./social/1.png" alt=""/>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://about.gitlab.com/">
                                <img src="./social/2.png" alt=""/>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://twitter.com/?lang=ru">
                                <img src="./social/3.png" alt=""/>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://ru.linkedin.com/">
                                <img src="./social/4.png" alt=""/>
                            </Link>
                        </li>
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default Footer;