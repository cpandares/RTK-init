import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './counter'
import { pokemonSlice } from './pokemons'
export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    pokemons: pokemonSlice.reducer
  },
})