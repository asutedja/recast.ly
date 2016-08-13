class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickedVideo: exampleVideoData[0]
    };
  }

  onListItemClick(video) {
    this.setState({

      clickedVideo: video
    });
    console.log(this.state);
  }

  render() {
    var currentVideo = this.state.clickedVideo;


    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={currentVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList click={this.onListItemClick.bind(this)} videos={exampleVideoData}/>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
