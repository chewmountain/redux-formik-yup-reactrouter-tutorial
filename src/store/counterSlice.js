// createSlice - создаю редусер и action для счетчика
import { createSlice } from "@reduxjs/toolkit";

// задаю через переменную изначальное значение (удобно)
const initialStateValue = 0;

const counterSlice = createSlice({
    // название редусера
    name: "counter",
    // ихначальный state
    initialState: {
        count: initialStateValue
    },
    // action's
    reducers: {
        toMath: (state, action) => {
            state.count = state.count + action.payload;
        },
        reset: state => {
            state.count = initialStateValue;
        },
        // "payload" полезная нагрукзка (важно передавать этот параметр только дальше в приложении. Тут должен быть чистый код)
        rnd: (state, action) => {
            state.count = action.payload;
        },
    },
});

// экспортирую как константы action'ы
export const { toMath, reset, rnd } = counterSlice.actions;

// экспортирую сам редусер
export default counterSlice.reducer;