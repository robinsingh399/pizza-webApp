import { configureStore} from '@reduxjs/toolkit';
import pizzaReducer from '../features/pizzamenuDetails/pizzamenuDetailsSlice';
export const store = configureStore({
  reducer: {
    pizzaDetails : pizzaReducer,
  },
});
