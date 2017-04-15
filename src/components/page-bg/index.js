import React, {PropTypes, Component} from 'react'
import isMobile from '../../utils/useragent-check'
import {render} from 'react-dom';
import s from './_styles.pcss'

class PageBg extends Component {
    componentDidMount() {
        if (!isMobile) {
            const css = [s.svg_bg, this.props.css].join(' ');
            let svg = require(`./svg/${this.props.bg}.svg`);

            const bg = () => { return (
                <div className={css}>
                    <svg viewBox={this.props.viewBox}>
                        <use xlinkHref={`${svg}#${this.props.bg}`}/>
                    </svg>
                </div>

            )}

            setTimeout(() => {
                    render(bg(), document.getElementById(this.props.page_node))
                }, 350
            )
        }
    }

    render() {
        return (
            <div id={this.props.page_node}/>
        );
    }
}

PageBg.PropTypes = {
    page_node: PropTypes.string.isRequired,
    bg: PropTypes.string.isRequired
}

export default PageBg;