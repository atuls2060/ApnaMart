import { legacy_createStore, combineReducers, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import { authReducer } from "./auth/auth.reducer";
import { productsReducer } from "./products/products.reducer"
import { cartsReducer } from "./carts/carts.reducer"


const rootReducer = combineReducers({
  authManager: authReducer,
  productsManager: productsReducer,
  cartsManager: cartsReducer
})

export const store = legacy_createStore(rootReducer, compose(applyMiddleware(thunk)));
