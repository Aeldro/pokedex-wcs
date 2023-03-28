function NavBar({ pokemonIndex, setPokemonIndex, pokemonList }) {

    const handlePokemonClick = (currentPokemon) => {
        setPokemonIndex(currentPokemon)
    }

    return (
        <>
            {pokemonList.map((el, index) =>
            (
                <button key={el.name} onClick={() => handlePokemonClick(index)}>{el.name}</button>
            )
            )}
        </>
    )

}

export default NavBar