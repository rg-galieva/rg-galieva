import React from 'react';
import Experiment from 'client/components/experiment/experiment';
import db from 'client/assets/db/experiments';

const Experiments = () => (
  <div>
    {
          db.map(experiment => (
            <div key={experiment.title}>
              <Experiment experiment={experiment} />
            </div>
          ))
      }
  </div>
);

export default Experiments;
