import React, { Component } from "react";
import Image from "next/image";

class SwipeableImage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      startX: null,
      startY: null,
      endX: null,
      endY: null,
    };
  }

  handleTouchStart = (event) => {
    this.setState({
      startX: event.touches[0].pageX,
      startY: event.touches[0].pageY,
    });
  };

  handleTouchMove = (event) => {
    this.setState({
      endX: event.touches[0].pageX,
      endY: event.touches[0].pageY,
    });
  };

  handleTouchEnd = () => {
    const { startX, endX } = this.state;

    if (startX && endX) {
      const deltaX = startX - endX;

      if (deltaX > 50) {
        this.props.onSwipeLeft();
      } else if (deltaX < -50) {
        this.props.onSwipeRight();
      }
    }

    this.setState({
      startX: null,
      startY: null,
      endX: null,
      endY: null,
    });
  };

  render() {
    const { images, currentIndex } = this.props;

    return (
      <div style={{ width: "100%", height: "100%" }}>
        <Image
          src={images[currentIndex]}
          alt={`Image ${currentIndex}`}
          fill="fill"
          style="contain"
          onTouchStart={this.handleTouchStart}
          onTouchMove={this.handleTouchMove}
          onTouchEnd={this.handleTouchEnd}
        />
      </div>
    );
  }
}

export default SwipeableImage;
