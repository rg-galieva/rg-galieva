import React, {Component} from 'react'
import {findDOMNode} from 'react-dom';
import {FormattedHTMLMessage, FormattedMessage} from 'react-intl';
import s from './_styles.pcss'

const sf = require('./svg/sf.svg');

class About extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        setTimeout(() => {
                findDOMNode(this.refs.sf_svg).className += " is_act";
            }, 350
        )
    }

    render() {
        return (
            <div className={s.wrap}>
                <div dangerouslySetInnerHTML={{__html: sf}} className={s.sf_svg} ref="sf_svg"></div>

                <section className={['row', s.cont].join(' ')}>
                    <header className="col_4">
                        <h2><FormattedMessage id="welcome"/></h2>
                    </header>

                    <div className="col_10">
                        <div className={s.desc}>
                            <p><FormattedHTMLMessage id="about.part1"/></p>

                            <p><FormattedMessage id="about.part2"/></p>

                            <p><FormattedMessage id="about.part3"/></p>

                            <p><FormattedMessage id="about.part4"/></p>

                            <p><FormattedMessage id="about.part5"/></p>

                            <p><FormattedMessage id="about.part6"/></p>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default About