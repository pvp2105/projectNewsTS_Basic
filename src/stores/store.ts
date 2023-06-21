import { configureStore } from "@reduxjs/toolkit";
import NewsSlice from "../reducers/newsSlice";
import { TypedUseSelectorHook, useSelector } from "react-redux";

const store = configureStore({
  reducer: {
      newsReducer: NewsSlice,
  },
});

export type IAppStateRedux = ReturnType<typeof store.getState>
//IAppStateRedux để đại diện cho kiểu dữ liệu của state trong store. 
//Kiểu này được xác định bằng cách sử dụng hàm ReturnType để lấy kiểu dữ liệu trả về của phương thức store.getState().
export const useAppSelector:TypedUseSelectorHook<IAppStateRedux>=useSelector

export default store