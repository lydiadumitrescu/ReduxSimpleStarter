import React, { Component } from 'react';
import { connect } from 'react-redux';

// import ImgFiles from '../reducers/reducer_imgFiles';
// import VideoFiles from '../reducers/reducer_videoFiles';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      imgDo: props.imgFiles.do,
      imgDoNot: props.imgFiles.doNot,
      videoDo: props.videoFiles.do
   };
  }

  renderList(list) {
    return list.map((imgObj) => {
      return (
        <li
          key={imgObj.img}
          className="list-group-item">
          <img src={imgObj.img}/>
          <span><br/>{imgObj.description} </span>
        </li>
      );
    });
  }


  render() {
    return (
      <div>
        <div className="container-list" id="do">
          <h3> Imi place </h3>
          <ul className="list-group">
            {this.renderList(this.state.imgDo)}
          </ul>
        </div>
        <div className="white-space"></div>
        <div className="container-list" id="dont">
          <h3> Nu prea imi place </h3>
          <ul className="list-group">
            {this.renderList(this.state.imgDoNot)}
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
