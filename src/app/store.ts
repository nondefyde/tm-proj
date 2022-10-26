import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import personalityTestReducer, { personalityTestSlice } from '../features/personality-test/PersonalityTestSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    personalityTest: personalityTestReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
