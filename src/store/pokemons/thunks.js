import { pokeApi } from "../../api/pokeApi";
import { setPokemons, startLoading } from "./pokemonSlice"



export const getPokemons = (page = 0)=>{
    return async (dispatch, getState)=>{
        dispatch(startLoading());


        
        /*  
             const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${page*10}`);
             const data = await resp.json();
         */
        
        const { data } = await pokeApi.get(`/pokemon?limit=20&offset=${page*10}`);

        dispatch(setPokemons({ page : page + 1, pokemons: data.results }));
    }
}