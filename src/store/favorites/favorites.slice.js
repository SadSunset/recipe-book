import { createSlice } from "@reduxjs/toolkit";

const initialState = []

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        toogleFavorites: (state, action) => {
            const recipe = action.payload
            const isExist = state.some(r => r.id === recipe.id)
            if (isExist) {
                const deleteIndex = state.findIndex(r => r.id === recipe.id)
                if (deleteIndex !== -1)
                    state.splice(deleteIndex, 1)
            }
            else
                state.push(recipe)
        }
    }
})

export const { actions, reducer } = favoritesSlice