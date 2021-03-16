import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type App = {
  todo: { title: string; content: string; date: string }[];
};

const initialState: App = {
  todo: [
    {
      title: 'Redux Toolkitサンプル',
      content: 'Reduxのセットアップ',
      date: '2020',
    },
  ],
};

const slice = createSlice({
  name: 'app',
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {
      return {
        ...state,
        todo: [...state.todo, ...action.payload],
      };
    },
  },
});

export default slice.reducer;
export const { addTodo } = slice.actions;
