import { configureStore } from "@reduxjs/toolkit"
import menuItemsSlice from "../features/menuItems/menuItemsSlice"

const store = configureStore({
    reducer:{
        foods: menuItemsSlice,
    }
})

export default store;