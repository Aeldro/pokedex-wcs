function NavBar({ pokemonIndex, setPokemonIndex, pokemonListLength }) {

    const handlePreviousClick = () => {
        setPokemonIndex(pokemonIndex - 1)
    }

    const handleNextClick = () => {
        setPokemonIndex(pokemonIndex + 1)
    }

    console.log(pokemonIndex)

    return (
        <>
            {pokemonIndex > 0 ? <button onClick={handlePreviousClick}>Précédent</button> : null}
            {pokemonIndex < pokemonListLength - 1 && <button onClick={handleNextClick}>Suivant</button>}
        </>
    )

}

export default NavBar