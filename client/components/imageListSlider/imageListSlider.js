import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { Image } from 'cloudinary-react';
import { CLOUD_PATH } from 'client/constants';

const ImageListSlider = (props) => {
  const { images, config } = props;

  const getImages = images.map(img => <Image key={img} cloudName={CLOUD_PATH} publicId={`${CLOUD_PATH}/${img}`} />);

  return (
    <Slider {...config}>
      {getImages}
    </Slider>
  );
};

ImageListSlider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  config: PropTypes.shape({}).isRequired,
};

export default ImageListSlider;
