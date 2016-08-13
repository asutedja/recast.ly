var Search = (props) => (
  <div className="search-bar form-inline">
    <form onSubmit={ (e) => 
      {
        e.preventDefault();
        props.searchYouTube(document.getElementById('test').value);
      }
    }>
      <input id='test' className="form-control" type="text" />
      <button className="btn hidden-sm-down" type='submit'>
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </form>
  </div> 
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
