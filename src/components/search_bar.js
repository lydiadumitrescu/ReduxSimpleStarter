// is needed because the JSX transformation: HTML to JS
import React, { Component } from 'react';

// functional component (no state)
//const SearchBar = () => {
//  return <input />;
//};

// class based component (ES 6 component)
// what is React.Component???
class SearchBar extends Component {
  constructor(props) {
    super(props);

    // only in the constructor : this.state
    // if not in constructor use: this.setState
    this.state = { term: '' };
  };

  // method in a class - a function
  // render function is mandatory
  render() {
    // return JSX - mandatory;
    // return <input onChange={this.onInputChange} />;
    // to reference a js value , eval in {};
    // JSX: Value of the input: {this.state.term};
    // when onchange fires the input is not changed, and it will
    // be changed with the new value of the state.term;
    return (
      <div className="search-bar">
        <input
        value={this.state.term}
        onChange={event => { this.onInputChange(event.target.value) }}
        />
      </div>
    );
  };

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

  // onInputChange(event) {
  //  console.log(event.target.value);
  //}
}

// what is default???
export default SearchBar;
