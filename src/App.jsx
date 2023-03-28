import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyTitle from './components/MyTitle'
import PokemonCard from './components/PokemonCard'
import NavBar from './components/NavBar'
import PropTypes from "prop-types"

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];

function App() {

  const [pokemonIndex, setPokemonIndex] = useState(0)

  return (
    <div>
      <NavBar pokemonIndex={pokemonIndex} setPokemonIndex={setPokemonIndex} pokemonListLength={pokemonList.length} />
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
    </div>
  );
}

export default App
