import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import personalityTestReducer from '../features/personality-test/PersonalityTestSlice';

export const store = configureStore({
  reducer: {
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
