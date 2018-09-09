import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import ProjectPrev from 'client/components/prjPrev/prjPrev';
import configDesktop from 'client/components/slider/configMain';
import configMobile from 'client/components/slider/configMobile';

class ProjectList extends Component {
    getProjects = (projects, isMobile) => projects.map(
      project => (
        <div key={project.id}>
          <ProjectPrev {...project} isMobile={isMobile} />
        </div>
      ),
    );

    getConfig = (id, isMobile) => {
      const config = isMobile ? configMobile : configDesktop;
      if (id) config.initialSlide = +id - 1;

      return config;
    };


    render() {
      const { projects, isMobile, match: { params: { id } = {} } } = this.props;

      return (
        <Slider {...this.getConfig(id, isMobile)}>
          { this.getProjects(projects, isMobile) }
        </Slider>
      );
    }
}

ProjectList.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
  isMobile: ProjectList.bool,
};

const mapStateToProps = ({ projects, switchVersion }) => ({
  projects: projects.all,
  isMobile: switchVersion.isMobile,
});

export default connect(mapStateToProps)(ProjectList);
