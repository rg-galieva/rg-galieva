import React, {PropTypes} from 'react'
import Slider from 'react-slick'
import {Image} from 'cloudinary-react';
import {CLOUD_PATH} from '../../constants'

const ImageListSlider = (props) => {
    let {images, config} = props;

    const getImages = images.map( (img) =>  <Image key={img} cloudName={CLOUD_PATH} publicId={`${CLOUD_PATH}/${img}`}/>);

    return (
        <Slider {...config}>
            {getImages}
        </Slider>
    )
}

ImageListSlider.PropTypes = {
    images: PropTypes.array.isRequired,
    config: PropTypes.object.isRequired
}

export default ImageListSlider