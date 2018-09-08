import React from 'react'
import Experiment from '../../components/experiment'
import db from '../../assets/db/experiments'
import s from './_styles.pcss'

const Experiments = (props) => {
    let experiments = db.map((experiment) => (
        <div key={experiment.title} className={s.wrapper}>
            <Experiment experiment={experiment}/>
        </div>
    ));

    return (
        <div>
            {experiments}
        </div>
    );
}

export default Experiments