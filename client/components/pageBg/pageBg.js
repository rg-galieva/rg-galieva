import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';

import s from './pageBg.scss';

const getBg = (css, viewBox, svg, bg) => (
  <div className={`${s.svg_bg} ${css}`}>
    <svg viewBox={viewBox}>
      <use xlinkHref={`${svg}#${bg}`} />
    </svg>
  </div>
);

class PageBg extends Component {
  componentDidMount() {
    const {
      css, bg, viewBox, pageNode,
    } = this.props;

    const svg = require(`./svg/${bg}.svg`);

    setTimeout(() => {
      render(getBg(css, viewBox, svg, bg), document.getElementById(pageNode));
    }, 350);
  }

  render() {
    const { pageNode } = this.props;

    return (
      <div id={pageNode} />
    );
  }
}

PageBg.propTypes = {
  pageNode: PropTypes.string.isRequired,
  bg: PropTypes.string.isRequired,
};

export default PageBg;
