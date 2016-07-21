var React = require('react');
var ReactDOM = require('react-dom');

var pokemonList = ['bulbasaur', 'ivysaur', 'venusaur', 'charmander', 'charmeleon', 'charizard', 'squirtle', 'wartortle', 'blastoise'];

var SearchBarContainer = React.createClass({
  getInitialState: function () {
    return {
      output: [],
    }
  },

  onAddInput: function (event) {
    var value = event.target.value.toLowerCase();
    var tempLib = this.props.searchList.filter(function (item) {
      var pokeMatch = new RegExp("^" + value);
        if (item.match(pokeMatch)) {
          console.log(true);
          return true;
        }else {
          console.log(false);
          return false;
        }
      });
    console.log(tempLib, 'tempLib');
    },

  render: function () {
    return (
      <SearchBar addInput={this.onAddInput}/>
    );
  }
});

var SearchBar = React.createClass({
  render: function () {
    return (
      <div>
        <input type="text" onChange={this.props.addInput} />
        <div className="output">{this.props.output}</div>
      </div>
    );
  }
});

document.addEventListener('DOMContentLoaded', function () {
  ReactDOM.render(<SearchBarContainer searchList={pokemonList}/>, document.getElementById('app'));
});
