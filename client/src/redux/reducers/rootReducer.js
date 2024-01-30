import { combineReducers } from "redux";
import usersReducer from "./usersReducer";
import productsReducer from "./productsReducer";
import salesReducer from "./salesReducer";
import purchasesReducer from "./purchasesReducer";
import clientsReducer from "./clientsReducer";
import providersReducer from "./providersReducer";

const rootReducer = combineReducers({
  users: usersReducer,
  // products: productsReducer,
  sales: salesReducer,
  purchases: purchasesReducer,
  clients: clientsReducer,
  providers: providersReducer,
});

export default rootReducer;
