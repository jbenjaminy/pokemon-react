var React = require('react');
var ReactDOM = require('react-dom');

var SearchBarContainer = createClass({
  getInitialState: function () {
    return {
      output: [],
      pokemonLib: ['bulbasaur', 'ivysaur', 'venusaur', 'charmander', 'charmeleon', 'charizard', 'squirtle', 'wartortle', 'blastoise']
    }
  },
  onAddInput: function (event) {
    var value = event.target.value;
    var tempLib = this.state.pokemonLib.filter(function (value) {

    })
  },
  render: function () {
    return (
      <SearchBar addInput={this.onAddInput}/>
    );
  }
});

var SearchBar = createClass({
  render: function () {
    return (
      <input type="text" onChange={this.props.addInput}>
      <div className="output">{this.props.output}</div>
    );
  }
});


document.addEventListener('DOMContentLoaded', function () {
  ReactDOM.render(<SearchBarContainer />, document.getElementById('app'));
});
