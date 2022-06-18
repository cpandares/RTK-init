import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { getPokemons } from "./store/pokemons";


const PokemonApp = () => {
    const dispatch = useDispatch()
    const { pokemons, isLoading, page } = useSelector(state => state.pokemons)
 
    useEffect(()=>{

        dispatch(getPokemons())
    },[])

    if(isLoading){
        return <div>Loading...</div>
    }
    return (
        <>
            <h2>Pokemon App</h2>
            <hr />

            <ul>
                {
                    pokemons?.map(pokemon=>{
                        return <li key={pokemon.id}>{pokemon.name}</li>
                    })
                }

            </ul>
            <button 
                disabled ={ isLoading }
                onClick = {()=>{ dispatch(getPokemons(page + 1)) }}
                >
                Load More
            </button>
            <button 
                disabled ={ isLoading }
                onClick = {()=>{ dispatch(getPokemons(page - 1)) }}
                >
                Back
            </button>
        </>
    );
};

export default PokemonApp;