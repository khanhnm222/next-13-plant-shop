import Cookies from 'js-cookie';
import { createSlice } from '@reduxjs/toolkit'

interface CartState {
  cartItems: any;
  itemsPrice: string;
  shippingPrice: string;
  taxPrice: string;
  totalPrice: string;
}


const initialState = Cookies.get('cart')
  ? { ...JSON.parse(Cookies.get('cart')!), loading: true }
  : {
      loading: true,
      cartItems: [],
      shippingAddress: {},
      paymentMethod: '',
    }

const addDecimals = (num: number) => {
  return (Math.round(num * 100) / 100).toFixed(2) // 12.3456 to 12.35
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state: CartState, action) => {
      const item = action.payload
      const existItem = state.cartItems.find((x: any) => x.id === item.id)
      if (existItem) {
        state.cartItems = state.cartItems.map((x: any) =>
          x.id === existItem.id ? item : x
        )
      } else {
        state.cartItems = [...state.cartItems, item]
      }
      state.itemsPrice = addDecimals(
        state.cartItems.reduce((acc: any, item: any) => acc + item.price * item.qty, 0)
      )
      state.shippingPrice = addDecimals(Number(state.itemsPrice) > 100 ? 0 : 100)
      state.taxPrice = addDecimals(
        Number((0.15 * Number(state.itemsPrice)).toFixed(2))
      )
      state.totalPrice = (
        Number(state.itemsPrice) +
        Number(state.shippingPrice) +
        Number(state.taxPrice)
      ).toFixed(2)

      Cookies.set('cart', JSON.stringify(state))
    },
    removeFromCart: (state, action) => {
     state.cartItems = state.cartItems.filter((x: any) => x.id !== action.payload)

     state.itemsPrice = addDecimals(
         state.cartItems.reduce((acc: any, item: any) => acc + item.price * item.qty, 0)
     )
     state.shippingPrice = addDecimals(state.itemsPrice > 100 ? 0 : 100)
     state.taxPrice = addDecimals(Number((0.15 * state.itemsPrice).toFixed(2)))
     state.totalPrice = (
      Number(state.itemsPrice) +
      Number(state.shippingPrice) +
      Number(state.taxPrice)
     ).toFixed(2)
     state.showSidebar = state.cartItems.length > 0
     Cookies.set('cart', JSON.stringify(state))
    },
    saveShippingAddress: (state, action) => {
      state.shippingAddress = action.payload
      Cookies.set('cart', JSON.stringify(state))
    },
    savePaymentMethod: (state, action) => {
      state.paymentMethod = action.payload
      Cookies.set('cart', JSON.stringify(state))
    },
    hideLoading: (state) => {
      state.loading = false
    },
  },
})

export const {
  addToCart,
  removeFromCart,
  saveShippingAddress,
  savePaymentMethod,
  hideLoading,
} = cartSlice.actions

export default cartSlice.reducer