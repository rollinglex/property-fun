import React, { Component } from "react";
import PropTypes from "prop-types";

import ImageWrapper from "./style/ImageWrapperStyle";

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
      <ImageWrapper>
        <img
          src={imgSrc}
          alt={altText}
          onLoad={this.imageLoadedHandler}
          onError={this.imageErrorHandler}
        />
        {this.state.status !== "loaded" ? this.state.status : null}
      </ImageWrapper>
    );
  }
}

ImgWithStatusText.propTypes = {
  imgSrc: PropTypes.string,
  altText: PropTypes.string
};

export default ImgWithStatusText;
