import React, {PropTypes} from 'react'
import s from './_styles.css'

const alx_logo = require('./svg/adluxe.svg'),
    mail_logo = require('./svg/mail.svg'),
    simai_logo = require('./svg/simai.svg');

export default function () {
    return (
        <div className={s.wrap}>
            <section className="row">
                <header className="col_4"><h2>Tech Set</h2></header>
                <div className="col_10">
                    <div className={s.skills}>
                        <div>
                            <h6>Core</h6>
                            <p>JS</p>
                            <p>HTML5</p>
                            <p>CSS</p>
                        </div>
                        <div>
                            <h6>JS</h6>
                            <p>ES2016</p>
                            <p>react</p>
                            <p>redux</p>
                            <p>flux</p>
                            <p>jquery</p>
                        </div>
                        <div>
                            <h6>Styles</h6>
                            <p>CSS3</p>
                            <p>LESS, SASS, PostCSS</p>
                            <p>css-modules, css-next</p>
                        </div>
                        <div>
                            <h6>DevTools</h6>
                            <p>webpack (v1, v2)</p>
                            <p>babel</p>
                            <p>grunt</p>
                        </div>
                        <div>
                            <h6>Testing</h6>
                            <p>mocha</p>
                        </div>
                        <div>
                            <h6>Server</h6>
                            <p>node.js</p>
                            <p>express</p>
                        </div>
                        <div>
                            <h6>DB</h6>
                            <p>MongoDB</p>
                            <p>PostgreSQL</p>
                        </div>
                        <div>
                            <h6>DevDeploy</h6>
                            <p>heroku</p>
                            <p>netlify</p>
                            <p>surge</p>
                            <p>firebase</p>
                        </div>
                        <div>
                            <h6>Package Managers</h6>
                            <p>npm</p>
                            <p>yarn</p>
                        </div>
                        <div>
                            <h6>Version Control</h6>
                            <p>git / GitHub</p>
                            <p>svn</p>
                        </div>
                        <div>
                            <h6>PM</h6>
                            <p>Jira, RedMind, Asana, Trello</p>
                            <p>Agile: Scrum, Kanban</p>
                        </div>
                        <div>
                            <h6>Other Tools</h6>
                            <p>Photoshop, Illustrator</p>
                            <p>Webstorm, Atom</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="row">
                <header className="col_4"><h2>Experience</h2></header>
                <div className="col_10">
                    <div className={s.company}>
                        <div className={[s.position, 'col_10'].join(' ')}>
                            <h5>Project Manager</h5>

                            <p className="is-emph">[2016 -to present] Moscow, Russia</p>
                            <ul>
                                <li>Successfully implemented Agile methodology in distributed, multiple time zones
                                    team
                                </li>
                                <li>Managed all phases of the product development for dozens of custom solutions</li>
                                <li>Guided team in the development of SPA</li>
                                <li>Created education tech program for managers and graphic designers (web development
                                    basics, working with git,
                                    node.js, webpack, Jenkins)
                                </li>
                            </ul>
                        </div>

                        <fiqure className="col_3">
                            <div dangerouslySetInnerHTML={{__html: alx_logo}} className={s.logo_alx}></div>

                            <figcaption>
                                <p>ADLUXE - creative technologies, Rich Media and Video Advertising Production</p>
                            </figcaption>
                        </fiqure>
                    </div>

                    <div className={s.company}>
                        <div className={[s.position, 'col_10'].join(' ')}>
                            <h5>Frontend Developer</h5>

                            <p className="is-emph">[2013 - 2016] Moscow, Russia</p>
                            <ul>
                                <li>Developed frontend for a Skyforge MMORPG social network. Created features integrated
                                    with core game’s systems
                                </li>
                                <li>Cross platform development for desktop, mobile, in-game (awesomium)</li>
                                <li>Made 3 global redesigns of the product. Created custom css-framework</li>
                                <li>Lead UI/UX testing</li>
                                <li>Managed all frontend development (code style, code structure, style guides)</li>
                                <li>Tech stack: tapestry framework (Java) with react.</li>
                            </ul>
                        </div>

                        <fiqure className="col_3">
                            <div dangerouslySetInnerHTML={{__html: mail_logo}} className={s.logo_mail}></div>

                            <figcaption>
                                <p>Mail.Ru Group is the largest Internet company in the Russian-speaking world
                                    and the leading Internet company in Russia, based on global monthly unique
                                    users.</p>
                            </figcaption>
                        </fiqure>
                    </div>

                    <div className={s.company}>
                        <div className={[s.position, 'col_10'].join(' ')}>
                            <h5>Web Developer</h5>

                            <p className="is-emph">[2011 - 2013] SAINT PETERSBURG, RUSSIA</p>
                            <ul>
                                <li>Made dozens sites, landings, email newsletters, mobile portals using PHP</li>
                                <li>Developed admin web applications for managing advertisement campaigns using Ruby on
                                    Rails
                                </li>
                                <li>Java EE: Web applications (front-end, back-end) using Spring MVC (Maven, JPA,
                                    JSP).
                                </li>
                            </ul>
                        </div>

                        <fiqure className="col_3">
                            <div className={s.logo_ifree}>
                                <a href="http://ifree.com/" target="_blank"><img src={require('./img/ifree.png')}
                                                                                 alt=""/></a>
                            </div>

                            <figcaption>
                                <p>i-Free Group includes more than 20 IT-tech companies and start-ups focuses on mobile
                                    technology. </p>
                            </figcaption>
                        </fiqure>
                    </div>

                    <div className={s.company}>
                        <div className={[s.position, 'col_10'].join(' ')}>
                            <h5>HTML developer</h5>

                            <p className="is-emph">[2008 - 2011] UFA, RUSSIA</p>
                            <ul>
                                <li>Worked on corporate portals for public administrations</li>
                                <li>TML/CSS/JS coding of web pages, improvement and optimization of existing interfaces,
                                    layout templates for 1C Bitrix.
                                </li>
                            </ul>
                        </div>

                        <fiqure className="col_3">
                            <div dangerouslySetInnerHTML={{__html: simai_logo}} className={s.logo_simai}></div>

                            <figcaption>
                                <p>Digital studio «Simai» lead in the market of information solutions in Ufa, Russia</p>
                            </figcaption>
                        </fiqure>
                    </div>
                </div>
            </section>

            <section className="row">
                <header className="col_4"><h2>Education</h2></header>
                <div className="col_9">
                    <div className={s.edu_row}>
                        <div className={[s.position, 'col_10'].join(' ')}>
                            <h5>Ufa State Aviation Technical University</h5>

                            <p className="is-emph">[2005 - 2010] UFA, RUSSIA</p>

                            <ul>
                                <li>Engineer / Master of telecommunication systems</li>
                            </ul>
                        </div>

                        <fiqure className="col_4">
                            <div className={s.logo_usatu}>
                                <a href="http://ugatu.su/" target="_blank"><img src={require('./img/usatu.png')}
                                                                                alt=""/></a>
                            </div>

                            <figcaption>
                                <p>USATU is one of the leading institutions of higher education in Russia</p>
                            </figcaption>
                        </fiqure>
                    </div>

                    <div className={s.edu}>
                        <h5>CISco networking academy</h5>

                        <p className="is-emph">[2009 - 2010] UFA, RUSSIA</p>
                        <ul>
                            <li>Networking for home and small businesses</li>
                            <li>Working at a small-to-medium business or ISP</li>
                        </ul>
                    </div>

                    <div className={s.edu}>
                        <h5>ifree TEchnical academy</h5>

                        <p className="is-emph">[2013] SAINT PETERSBURG, RUSSIA</p>
                        <ul>
                            <li>Developing products from scratch</li>
                            <li>Won the place education among 150 others participants</li>
                            <li>Won the first prize in a team competition among 10 others team for investing</li>
                        </ul>
                    </div>

                    <div className={s.edu}>
                        <h5>Graphic Design BOOTCAMP</h5>

                        <p className="is-emph">[2015] MOSCOW, RUSSIA</p>
                        <ul>
                            <li>10 weeks course: graphic design in web</li>
                            <li>Effective designs principles, theory and practice</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}