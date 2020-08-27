import { createSlice } from '@reduxjs/toolkit'

const AVAILABLE = 0;
const PENDING = 1;
const SUCCESS = 2;

export const recipesSlice = createSlice({
  name: 'recipes',
  initialState: {
    list: [],
    load_status: AVAILABLE,
    add_status: AVAILABLE,
    remove_status: AVAILABLE
  },
  reducers: {
    load_request: (state, action) => {
      state.load_status = PENDING
    },
    load_success: (state, action) => {
      state.list = action.payload;
      state.load_status = SUCCESS;
    },
    add_request: (state, action) => {
      state.add_status = PENDING
    },
    add_success: (state, action) => {
      state.list.push(action.payload);
      state.add_status = SUCCESS;
    },
    remove_request: (state, action) => {
      state.remove_status = PENDING
    },
    remove_success: (state, action) => {
      state.list.splice(state.list.indexOf(action.payload),1);
      state.remove_status = SUCCESS;
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
