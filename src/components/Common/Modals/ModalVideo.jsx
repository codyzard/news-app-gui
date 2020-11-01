import React, { Component } from "react";

class ModalVideo extends Component {
  render() {
    return (
      <div
        className="modal fade"
        id="modal-video-01"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document" data-dismiss="modal">
          <div
            className="close-mo-video-01 trans-0-4"
            data-dismiss="modal"
            aria-label="Close"
          >
            ×
          </div>
          <div className="wrap-video-mo-01">
            <div className="video-mo-01">
              <iframe
                src="https://www.youtube.com/embed/wJnBTPUQS5A?rel=0"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalVideo;
