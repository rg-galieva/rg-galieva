import React from 'react'
import {FormattedMessage} from 'react-intl';
import s from './_styles.pcss'

const icons = require('../../assets/svg/icons.svg');

const Resume = () => {
    return (
      <div className={s.wrap}>
          <section className="row">
              <header className="col_4">
                  <h2><FormattedMessage id="techstack"/></h2>
              </header>

              <div className="col_10">
                  <div className={s.skills}>
                      <div>
                          <h6>Front-end</h6>
                          <p>React</p>
                          <p>MobX, Redux, Flux</p>
                          <p>Antd UI, Material UI</p>
                          <p>Typescript</p>
                      </div>
                      <div>
                          <h6>Back-end</h6>
                          <p>Node</p>
                          <p>Express</p>
                          <p>Postgres, Mongo</p>
                          <p>Swagger</p>
                      </div>
                      <div>
                          <h6>Styles</h6>
                          <p>Sass</p>
                          <p>Less</p>
                          <p>PostCss</p>
                          <p>Css-modules, BEM</p>
                      </div>
                      <div>
                          <h6>Dev Tools</h6>
                          <p>Git, Svn</p>
                          <p>Webpack</p>
                          <p>Grunt, Gulp</p>
                          <p>Babel, ESLint</p>
                      </div>
                      <div>
                          <h6>Testing</h6>
                          <p>Mocha</p>
                          <p>Jest</p>
                      </div>
                      <div>
                          <h6>Dev Deploy</h6>
                          <p>Heroku, Amazon S3</p>
                          <p>Jenkins</p>
                      </div>
                      <div>
                          <h6>Project Management</h6>
                          <p>Agile: Scrum, Kanban</p>
                          <p>Jira, Asana, Gitlub</p>
                      </div>
                      <div>
                          <h6>Familiar with</h6>
                          <p>JAVA EE: Spring, Tapestry</p>
                          <p>Ruby: RoR</p>
                          <p>PHP: Wordpress</p>
                      </div>
                  </div>
              </div>
          </section>

          <section className="row">
              <header className="col_4"><h2><FormattedMessage id="experience"/></h2></header>
              <div className="col_10">
                  <div className={s.company}>
                      <div className={[s.position, 'col_10'].join(' ')}>
                          <h5><FormattedMessage id="senior_frontend_developer"/></h5>

                          <p className="is-emph"><FormattedMessage id="month.may"/> 2017 - <FormattedMessage id="resume.to_present"/></p>
                          <ul>
                              <li>
                                  <FormattedMessage id="fr8_1"/>
                                  <ul>
                                    <li>- <FormattedMessage id="fr8_1_1"/></li>
                                    <li>- <FormattedMessage id="fr8_1_2"/></li>
                                    <li>- <FormattedMessage id="fr8_1_3"/></li>
                                  </ul>
                              </li>
                              <li><FormattedMessage id="fr8_2"/></li>
                              <li><FormattedMessage id="fr8_3"/></li>
                              <li><FormattedMessage id="fr8_4"/></li>
                          </ul>
                      </div>

                      <fiqure className="col_3">
                          <div className={s.logo_fr8}>
                              <svg viewBox="0 0 124 32">
                                  <use xlinkHref={`${icons}#fr8`}/>
                              </svg>
                          </div>

                          <figcaption>
                              <p><FormattedMessage id="fr8_about"/></p>
                          </figcaption>
                      </fiqure>
                  </div>

                  <div className={s.company}>
                      <div className={[s.position, 'col_10'].join(' ')}>
                          <h5><FormattedMessage id="teamLead"/></h5>

                          <p className="is-emph">2015 - 2017</p>

                          <ul>
                              <li><FormattedMessage id="alx_1"/></li>
                              <li><FormattedMessage id="alx_2"/></li>
                              <li><FormattedMessage id="alx_3"/></li>
                              <li><FormattedMessage id="alx_4"/></li>
                              <li><FormattedMessage id="alx_5"/></li>
                          </ul>
                      </div>

                      <fiqure className="col_3">
                          <div className={s.logo_alx}>
                              <svg viewBox="0 0 138.49 121.7">
                                  <use xlinkHref={`${icons}#adluxe`}/>
                              </svg>
                          </div>

                          <figcaption>
                              <p><FormattedMessage id="alx_about"/></p>
                          </figcaption>
                      </fiqure>
                  </div>

                  <div className={s.company}>
                      <div className={[s.position, 'col_10'].join(' ')}>
                          <h5><FormattedMessage id="frontend_developer"/></h5>

                          <p className="is-emph">2013 - 2015</p>
                          <ul>
                              <li><FormattedMessage id="mail_1"/></li>
                              <li><FormattedMessage id="mail_2"/></li>
                              <li><FormattedMessage id="mail_3"/></li>
                              <li><FormattedMessage id="mail_4"/></li>
                              <li><FormattedMessage id="mail_5"/></li>
                          </ul>
                      </div>

                      <fiqure className="col_3">
                          <div className={s.logo_mail}>
                              <svg viewBox="0 0 351.33 73.01">
                                  <use xlinkHref={`${icons}#mail`}/>
                              </svg>
                          </div>

                          <figcaption>
                              <p><FormattedMessage id="mail_about"/></p>
                          </figcaption>
                      </fiqure>
                  </div>

                  <div className={s.company}>
                      <div className={[s.position, 'col_10'].join(' ')}>
                          <h5><FormattedMessage id="web_developer"/></h5>

                          <p className="is-emph">2011 - 2013</p>
                          <ul>
                              <li><FormattedMessage id="ifree_1"/></li>
                              <li><FormattedMessage id="ifree_2"/></li>
                              <li><FormattedMessage id="ifree_3"/></li>
                          </ul>
                      </div>

                      <fiqure className="col_3">
                          <div className={s.logo_ifree}>
                              <a href="http://ifree.com/" target="_blank"><img
                                src={require('./img/ifree.png')}
                                alt=""/></a>
                          </div>

                          <figcaption>
                              <p><FormattedMessage id="ifree_about"/></p>
                          </figcaption>
                      </fiqure>
                  </div>

                  <div className={s.company}>
                      <div className={[s.position, 'col_10'].join(' ')}>
                          <h5><FormattedMessage id="web_developer"/></h5>

                          <p className="is-emph">2008 - 2011</p>
                          <ul>
                              <li><FormattedMessage id="simai_1"/></li>
                          </ul>
                      </div>

                      <fiqure className="col_3">
                          <div className={s.logo_simai}>
                              <svg viewBox="0 0 344.25 99">
                                  <use xlinkHref={`${icons}#simai`}/>
                              </svg>
                          </div>

                          <figcaption>
                              <p><FormattedMessage id="simai_about"/></p>
                          </figcaption>
                      </fiqure>
                  </div>
              </div>
          </section>

          <section className="row">
              <header className="col_4"><h2><FormattedMessage id="education"/></h2></header>
              <div className="col_10">
                  <div className={s.edu_row}>
                      <div className={[s.position, 'col_10'].join(' ')}>
                          <h5><FormattedMessage id="usatu"/></h5>

                          <p className="is-emph">2005 - 2010</p>

                          <ul>
                              <li><FormattedMessage id="usatu.edu"/></li>
                          </ul>
                      </div>

                      <fiqure className="col_3">
                          <div className={s.logo_usatu}>
                              <a href="http://ugatu.su/" target="_blank"><img
                                src={require('./img/usatu.png')}
                                alt=""/></a>
                          </div>

                          <figcaption>
                              <p><FormattedMessage id="usatu.descr"/></p>
                          </figcaption>
                      </fiqure>
                  </div>

                  <div className={s.edu}>
                      <h5><FormattedMessage id="cisco.title"/></h5>

                      <p className="is-emph">2009 - 2010</p>
                      <ul>
                          <li><FormattedMessage id="cisco.part1"/></li>
                          <li><FormattedMessage id="cisco.part2"/></li>
                      </ul>
                  </div>

                  <div className={s.edu}>
                      <h5><FormattedMessage id="ifree.academy.title"/></h5>

                      <p className="is-emph">2013</p>
                      <ul>
                          <li><FormattedMessage id="ifree.academy.part1"/></li>
                          <li><FormattedMessage id="ifree.academy.part2"/></li>
                      </ul>
                  </div>

                  <div className={s.edu}>
                      <h5><FormattedMessage id="design.academy.title"/></h5>

                      <p className="is-emph">2015</p>
                      <ul>
                          <li><FormattedMessage id="design.academy.part1"/></li>
                          <li><FormattedMessage id="design.academy.part2"/></li>
                      </ul>
                  </div>
              </div>
          </section>
      </div>
    )
}

export default Resume