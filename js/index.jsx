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
          return true;
        }else {
          return false;
        }
      });

      this.setState({ 
          output: tempLib
      });
  },

  render: function () {
    return (
      <SearchBar addInput={this.onAddInput} output={this.state.output}/>
    );
  }
});

var SearchBar = React.createClass({
  render: function () {
    var pokeComponents = [];
    this.props.output.forEach(
      function(pokeName) {
        pokeComponents.push(<Pokemon name={pokeName}/>);
      }
    );
    return (
      <div>
        <input type="text" onChange={this.props.addInput} />
        <ul className="output">{pokeComponents}</ul>
      </div>
    );
  }
});

var Pokemon = React.createClass({
  render: function () {
    return (
      <li className="output-item"><a href={"https://pokemondb.net/pokedex/" + this.props.name}>{this.props.name}</a></li>
      );
  }
});

document.addEventListener('DOMContentLoaded', function () {
  ReactDOM.render(<SearchBarContainer searchList={pokemonList}/>, document.getElementById('app'));
});
