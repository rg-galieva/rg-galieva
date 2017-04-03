import React, {PropTypes, Component} from 'react'
import {connect} from 'react-redux'
import ProjectPrev from '../../components/prj-prev'
import {Link} from 'react-router-dom'
import {getProjectById} from '../../actions/projects'
import s from './_styles.pcss'

class ProjectList extends Component {
    render() {
        return (
            <div className={s.page}>
                <ProjectPrev {...this.props.project}/>

                <div className={s.slider}>
                    <Link to="/projects"/>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return dispatch(getProjectById('1'))
};

const mapStateToProps = (state) => {
    return {
        project: state.project
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectList);