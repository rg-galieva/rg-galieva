import React, {PropTypes} from 'react'

function Pagination(props) {
    let {projects, active_page} = props;

    return (
        <div>

        </div>
    );
}

Pagination.propTypes = {
    projects: PropTypes.array.isRequired,
    active_page: PropTypes.object
};

export default Pagination;

