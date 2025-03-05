import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CartState = {
  items: Game[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Game>) => {
      const game = state.items.find((item) => item.id === action.payload.id)
      if (!game) {
        state.items.push(action.payload)
      } else {
        alert('Jogo já está no carrinho')
      }
    },
    remove: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    close: (state) => {
      state.isOpen = false
    },
    open: (state) => {
      state.isOpen = true
    },
    clear: (state) => {
      state.items = []
    }
  }
})

export const { add, close, open, remove, clear } = cartSlice.actions

export default cartSlice.reducer
