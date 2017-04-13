import React, {PropTypes, Component} from 'react'
import isMobile from '../../utils/useragent-check'
import {render} from 'react-dom';
import s from './_styles.pcss'

class PageBg extends Component {
    componentDidMount() {
        if (!isMobile) {
            const css = [s.svg_bg, this.props.css].join(' ');

            const bg = () => { return <div dangerouslySetInnerHTML={{__html: require(`./svg/${this.props.bg}.svg`)}} className={css}></div> }

            setTimeout(() => {
                    render(bg(), document.getElementById(this.props.page_node))
                }, 350
            )
        }
    }

    render() {
        return (
            <div id={this.props.page_node}></div>
        );
    }
}

PageBg.PropTypes = {
    page_node: PropTypes.string.isRequired,
    bg: PropTypes.string.isRequired
}

export default PageBg;