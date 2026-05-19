import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast';


const initialState = {
  pastes: localStorage.getItem('pastes') ? JSON.parse(localStorage.getItem('pastes')) : [],
}

export const pasteSlice = createSlice({
  name: 'paste',
  initialState,
  reducers: {
    addToPastes: (state, action) => {
     
      const paste = action.payload;
      state.pastes.push(paste);
      localStorage.setItem('pastes', JSON.stringify(state.pastes));
      toast.success('Paste added successfully!');

    },
    updatePaste: (state, action) => {
      const paste = action.payload;
      const index = state.pastes.findIndex(p => p.__id === paste.__id);
      if (index !== -1) {
        state.pastes[index] = paste;
        localStorage.setItem('pastes', JSON.stringify(state.pastes));
        toast.success('Paste updated successfully!');
      }
    },
    resetAllPastes: (state, action) => {
      state.pastes = [];
      localStorage.removeItem('pastes');
      toast.success('All pastes cleared!');
    },
    removeFromPastes: (state, action) => {
      const pasteId = action.payload;
      state.pastes = state.pastes.filter(p => p.__id !== pasteId);
      localStorage.setItem('pastes', JSON.stringify(state.pastes));
      toast.success('Paste removed!');
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToPastes, updatePaste, resetAllPastes, removeFromPastes } = pasteSlice.actions

export default pasteSlice.reducer