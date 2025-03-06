import {
    combineReducers,
    configureStore,
    PreloadedState
  } from '@reduxjs/toolkit'
import comentarioSlice from './reducers/comentarios'

const rootReducer = combineReducers({
    comentarios: comentarioSlice
})

export function configuracaoStore(preloadedState?: PreloadedState<RootState>) {
    return configureStore({
        reducer: rootReducer,
        preloadedState
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof configuracaoStore>