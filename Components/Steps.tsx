import React from 'react';

import style from '../styles/step.module.scss'
import Effect from "./effect";


const Steps = () => {
    return (
          <div className={style.step} id="steps">
            <h1 className={style.step__title}>Steps</h1>
              <div className="timeline">
                  <div className="container__step left">
                      <div className="c">
                          <div className="content">
                              <h3>Step 1</h3>
                              <h2>Introduction to Front-End </h2>
                              <p>Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. </p>
                          </div>
                      </div>
                  </div>
                  <div className="container__step right">
                      <div className="content">
                          <h3>Step 2</h3>
                          <h2>Overview of Development</h2>
                          <p>Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. </p>
                      </div>
                  </div>
                  <div className="container__step left">
                      <div className="content">
                          <h3>Step 3</h3>
                          <h2>Introduction to Front-End </h2>
                          <p>Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. </p>
                      </div>
                  </div>
                  <div className="container__step right">
                      <div className="content">
                          <h3>Step 4</h3>
                          <h2>Overview of Development</h2>
                          <p>Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. </p>
                      </div>
                  </div>
                  <div className="container__step left">
                      <div className="content">
                          <h3>Step 5</h3>
                          <h2>Introduction to Front-End </h2>
                          <p>Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. </p>
                      </div>
                  </div>
                  <div className="container__step right">
                      <div className="content">
                          <h3>Step 6</h3>
                          <h2>Overview of Development</h2>
                          <p>Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. </p>
                      </div>
                  </div>
              </div>
              <Effect props={{left: '30%'}} />
        </div>
    );
};

export default Steps;