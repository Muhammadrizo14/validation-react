import React from 'react';
import Link from "next/link";
import styles from '../styles/Navbar.module.scss'

const Navbar = () => {
    return (
        <div className={styles.navbar__wrapper}>
            <div className={styles.container}>
                <img src="./logo.png" alt="asd"/>
                <ul>

                    <li>
                        <Link href="#about">About</Link>
                    </li>

                    <li>
                        <Link href="#programs">
                            Programs
                        </Link>
                    </li>
                    <li>
                        <Link href="#steps">
                            Steps
                        </Link>
                    </li>
                    <li>
                        <Link href="#questions">
                            Questions
                        </Link>
                    </li>
                    <li>Get in touch</li>
                </ul>
            </div>

        </div>
    );
};

export default Navbar;