var React = require('react');
var ReactDOM = require('react-dom');

var pokemonList = ['Bulbasaur', 'Ivysaur', 'Venusaur', 'Charmander', 'Charmeleon', 'Charizard', 'Squirtle', 'Wartortle', 'Blastoise', 'Caterpie', 'Metapod', 'Butterfree', 'Weedle', 'Kakuna', 'Beedrill', 'Pidgey', 'Pidgeotto', 'Pidgeot', 'Rattata', 'Raticate', 'Spearow', 'Fearow', 'Ekans', 'Arbok', 'Pikachu', 'Raichu', 'Sandshrew', 'Sandslash', 'Nidoran F', 'Nidorina',  'Nidoqueen', 'Nidoran M', 'Nidorino',  'Nidoking',  'Clefairy',  'Clefable',  'Vulpix',  'Ninetales', 'Jigglypuff', 'Wigglytuff',  'Zubat', 'Golbat',  'Oddish',  'Gloom', 'Vileplume', 'Paras',  'Parasect',  'Venonat', 'Venomoth', 'Diglett', 'Dugtrio', 'Meowth', 'Persian', 'Psyduck', 'Golduck', 'Mankey', 'Primeape', 'Growlithe', 'Arcanine', 'Poliwag', 'Poliwhirl', 'Poliwrath', 'Abra', 'Kadabra', 'Alakazam', 'Machop', 'Machoke', 'Machamp', 'Bellsprout', 'Weepinbell', 'Victreebel', 'Tentacool', 'Tentacruel', 'Geodude', 'Graveler', 'Golem', 'Ponyta', 'Rapidash', 'Slowpoke', 'Slowbro', 'Magnemite', 'Magneton', 'Farfetchd', 'Doduo', 'Dodrio', 'Seel', 'Dewgong', 'Grimer', 'Muk', 'Shellder', 'Cloyster', 'Gastly', 'Haunter', 'Gengar', 'Onix', 'Drowzee', 'Hypno', 'Krabby', 'Kingler', 'Voltorb', 'Electrode', 'Exeggcute', 'Exeggutor', 'Cubone', 'Marowak', 'Hitmonlee', 'Hitmonchan', 'Lickitung', 'Koffing', 'Weezing', 'Rhyhorn', 'Rhydon', 'Chansey', 'Tangela', 'Kangaskhan', 'Horsea', 'Seadra', 'Goldeen', 'Seaking', 'Staryu', 'Starmie', 'Mr Mime', 'Scyther', 'Jynx', 'Electabuzz', 'Magmar', 'Pinsir', 'Tauros', 'Magikarp', 'Gyarados', 'Lapras', 'Ditto', 'Eevee', 'Vaporeon', 'Jolteon', 'Flareon', 'Porygon', 'Omanyte', 'Omastar', 'Kabuto', 'Kabutops', 'Aerodactyl', 'Snorlax', 'Articuno', 'Zapdos', 'Moltres', 'Dratini', 'Dragonair', 'Dragonite', 'Mewtwo', 'Mew'  ];

var SearchBarContainer = React.createClass({
  getInitialState: function () {
    return {
      output: [],
    }
  },

  onAddInput: function (event) {
    var value = event.target.value.toLowerCase();
    if (value.length > 0) {
      var tempLib = this.props.searchList.filter(function (item) {
        item = item.toLowerCase();
        var pokeMatch = new RegExp(value);
        if (item.match(pokeMatch)) {
          return true;
        } else {
          return false;
        }
      });
    } else {
      var tempLib = [];
    }
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
    this.props.output.forEach(function(pokeName) {
      var pokeUrl = pokeName.replace(' ', '-');
      pokeComponents.push(<Pokemon name={pokeName} url={pokeUrl}/>);
    });
    return (
      <div className="pokeInput">
        <input type="text" placeholder="Search Pokemon" onChange={this.props.addInput} />
        <ul className="output">{pokeComponents}</ul>
      </div>
    );
  }
});

var Pokemon = React.createClass({
  render: function () {
    return (
      <li className="output-item"><a href={'//pokemondb.net/pokedex/' + this.props.url}>{this.props.name}</a></li>
    );
  }
});

document.addEventListener('DOMContentLoaded', function () {
  ReactDOM.render(<SearchBarContainer searchList={pokemonList}/>, document.getElementById('app'));
});
