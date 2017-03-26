import React, {PropTypes} from 'react'
import s from './_styles.css'

export default function () {
    return (
        <div className={s.wrap}>
            <section className="row">
                <header className="col_4"><h2>Tech Set</h2></header>
                <div className="col_10">
                    <div className={s.skills}>
                        <div>
                            <h6>Javascript</h6>
                            <p>Jquery</p>
                            <p>GSAP</p>
                            <p>ES2015</p>
                        </div>
                        <div>
                            <h6>Styles</h6>
                            <p>CSS3</p>
                            <p>LESS, SASS, PostCSS</p>
                            <p>css-modules, css-next</p>
                        </div>
                        <div>
                            <h6>React</h6>
                            <p>Flux</p>
                            <p>Redux</p>
                            <p>React Router v3</p>
                        </div>
                        <div>
                            <h6>Builders</h6>
                            <p>Grunt</p>
                            <p>Webpack</p>
                        </div>
                        <div>
                            <h6>Testing</h6>
                            <p></p>
                        </div>
                        <div>
                            <h6>DB</h6>
                            <p>MongoDB</p>
                            <p>PostgreSQL</p>
                        </div>
                        <div>
                            <h6>PM</h6>
                            <p>Jira, RedMind, Asana, Trello</p>
                            <p>Agile: Scrum, Kanban</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="row">
                <header className="col_4"><h2>Education</h2></header>
                <div className="col_10">
                    <p>[2005 - 2010] Ufa State Aviation Technical University, Russia</p>
                    <p>Engineer</p>
                </div>
            </section>

            <section className="row">
                <header className="col_4"><h2>Working Experience</h2></header>
                <div className="col_10">
                    <fiqure className={s.company}>
                        <img src={require('./img/ifree.png')} alt=""/>
                        <figcaption>i-Free - NFC technology, digital content distribution, applications for smartphones
                            and new network devices, digital products for the B2C market, and B2B projects in mobile
                            marketing etc.
                        </figcaption>
                    </fiqure>

                    <fiqure className={s.company}>
                        <img src={require('./img/mycom.png')} alt=""/>
                        <figcaption>My.com is an integrated platform that powers a suite of online communication and
                            entertainment applications, including myMail, myChat and myGames
                        </figcaption>
                    </fiqure>

                    <fiqure className={s.company}>
                        <img src={require('./img/simai.png')} alt=""/>
                        <figcaption>My.com is an integrated platform that powers a suite of online communication and
                            entertainment applications, including myMail, myChat and myGames
                        </figcaption>
                    </fiqure>
                </div>
            </section>
        </div>
    );
}