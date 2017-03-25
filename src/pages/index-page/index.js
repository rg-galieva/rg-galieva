import React, { PropTypes } from 'react'
import {Image} from 'cloudinary-react';
import {CLOUD_PATH} from '../../constants'

function MainPage() {
    return (
        <div>
            <Image cloudName={CLOUD_PATH} publicId={`${CLOUD_PATH}/main`} />
        </div>
    );
}


export default MainPage;

