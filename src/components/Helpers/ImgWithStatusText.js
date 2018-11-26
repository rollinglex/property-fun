import React, { Component } from "react";
import PropTypes from "prop-types";

import { ImageWrapperStyle } from "../../styles/Helpers/";

class ImgWithStatusText extends Component {
  state = {
    status: "loading"
  };

  imageLoadedHandler = () => {
    this.setState(prevState => ({
      status: "loaded"
    }));
  };

  imageErrorHandler = () => {
    this.setState(prevState => ({
      status: "loading error"
    }));
  };

  render() {
    const { imgSrc, altText } = this.props;
    return (
      <ImageWrapperStyle>
        <img
          src={imgSrc}
          alt={altText}
          onLoad={this.imageLoadedHandler}
          onError={this.imageErrorHandler}
        />
        {this.state.status !== "loaded" ? this.state.status : null}
      </ImageWrapperStyle>
    );
  }
}

ImgWithStatusText.propTypes = {
  imgSrc: PropTypes.string,
  altText: PropTypes.string
};

export default ImgWithStatusText;
