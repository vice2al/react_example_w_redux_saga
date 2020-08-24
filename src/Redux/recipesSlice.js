import { createSlice } from '@reduxjs/toolkit'

export const recipesSlice = createSlice({
  name: 'recipes',
  initialState: {
    list: []
  },
  reducers: {
    load: (state, action) => {
      state.list = action.payload
    },
    add: (state, action) => {
      state.list.push(action.payload)
    },
    remove: (state, action) => {
      state.list.splice(array.indexOf(action.payload),1)
    }
  }
});

export const { load, add, remove } = recipesSlice.actions;

export const selectRecipes = state => state.recipes.list;

export default recipesSlice.reducer