import React, { Component } from 'react';
import { connect } from 'react-redux';

// import ImgFiles from '../reducers/reducer_imgFiles';
// import VideoFiles from '../reducers/reducer_videoFiles';

import ImgItem from './img-item';
import VideoItem from './video-item';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      imgDo: props.imgFiles.do,
      imgDoNot: props.imgFiles.doNot,
      videoDo: props.videoFiles.do,
      videoDoNot: props.videoFiles.doNot
   };
  }

  renderList(list) {
    return list.map((obj) => {
      if(!!obj.img){
        return (
          <ImgItem img={obj.img} description={obj.description}/>
        );
      } else if(!!obj.video) {
        return (
          <VideoItem video={obj.video} description={obj.description}/>
        );
      }

      return (<div>Something went wrong.</div>)
      
    });
  }

  // {this.renderList(this.state.imgDo)}
  // {this.renderList(this.state.imgDoNot)}

  render() {
    return (
      <div>
        <div className="container-list" id="do">
          <h3> Imi place </h3>
          <ul className="list-group">
            {this.renderList(this.state.videoDo)}
          </ul>
        </div>
        <div className="white-space"></div>
        <div className="container-list" id="dont">
          <h3> Nu prea imi place </h3>
          <ul className="list-group">
            {this.renderList(this.state.videoDoNot)}
          </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    imgFiles: state.imgFiles,
    videoFiles: state.videoFiles
  }
}

export default connect(mapStateToProps)(App);
