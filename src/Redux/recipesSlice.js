import { createSlice } from '@reduxjs/toolkit';
import {
  ACTION_AVAILABLE,
  ACTION_PENDING,
  ACTION_SUCCESS
} from "./redux_constants";

export const recipesSlice = createSlice({
  name: 'recipes',
  initialState: {
    list: [],
    load_status: ACTION_AVAILABLE,
    add_status: ACTION_AVAILABLE,
    remove_status: ACTION_AVAILABLE
  },
  reducers: {
    load_request: (state, action) => {
      state.load_status = ACTION_PENDING;
    },
    load_success: (state, action) => {
      state.list = action.payload;
      state.load_status = ACTION_SUCCESS;
    },
    add_request: (state, action) => {
      state.add_status = ACTION_PENDING;
    },
    add_success: (state, action) => {
      state.list.push(action.payload);
      state.add_status = ACTION_SUCCESS;
    },
    remove_request: (state, action) => {
      state.remove_status = ACTION_PENDING;
    },
    remove_success: (state, action) => {
      state.list.splice(findRecipe(action.payload, state.list),1);
      state.remove_status = ACTION_SUCCESS;
    }
  }
});

export const { 
  load_request,
  load_success, 
  add_request, 
  add_success, 
  remove_request, 
  remove_success } = recipesSlice.actions;

export const selectRecipes = state => state.recipes.list;
export const selectLoadStatus = state => state.recipes.load_status;
export const selectAddStatus = state => state.recipes.add_status;
export const selectRemoveStatus = state => state.recipes.remove_status;

export default recipesSlice.reducer;

// Custom indexOf to find the right recipe for the remove action.
function findRecipe(recipe, list) {
  for (var i =  0; i < list.length; i++){
    if (recipe.title === list[i].title)
      return i;
  }

  return -1;
} 