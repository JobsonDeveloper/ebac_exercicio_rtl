import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import Comment from "../../models/Comment"

type ComentarioState = {
    lista: Comment[]
}

const initialState: ComentarioState = {
    lista: []
}

const comentarioSlice = createSlice({
    name: 'comentario',
    initialState,
    reducers: {
        adicionar: (state, action: PayloadAction<Comment>) => {
            state.lista.push(action.payload)
        }
    },
})

export const { adicionar } = comentarioSlice.actions
export default comentarioSlice.reducer