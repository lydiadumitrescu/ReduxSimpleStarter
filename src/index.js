//https://babeljs.io/repl/
//http://localhost:8080/

// get react from "react folder" and install it in React variable
import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
// import from file (depends on what you exported)
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

// YouTube Data API v3 from https://console.cloud.google.com
const API_KEY = 'AIzaSyAdC1lFK-9BJlg4QEcA7z4f2yZrMPc-L64';

// functional component (no state)
// const App = () => {
//   return ( <div> <SearchBar /> </div> ); // JSX
// };

// class based component (ES 6 component)
class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
      term: 'surfboards'
     };

     this.videoSearch(this.state.term);
  }

  videoSearch(term) {
    console.log(term);
    // YTSearch(configuration options, callback function)
    YTSearch({key: API_KEY, term: term}, (videos) => {
      // this.setState({videos: videos}) ->
      // this.setState({ videos });
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300)

    return ( // JSX
      <div>
        <SearchBar onSearchTermChange={ videoSearch } />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={ selectedVideo => this.setState({selectedVideo}) }
          videos={this.state.videos}
         />
      </div>
    );
  }
}

// Take this component's generated HTML and put it
// on the page (in the DOM)
// App     - class
// <App /> - instance
ReactDOM.render(<App />, document.querySelector('.container'));
