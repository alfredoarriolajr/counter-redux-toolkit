import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const ageSlice = createSlice({
  name: 'ageNumber',
  initialState,
  reducers: {
    inputAge: (state, action) => {
      state.value = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { inputAge } = ageSlice.actions

export default ageSlice.reducer