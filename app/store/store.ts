"use client"

import { configureStore } from "@reduxjs/toolkit"
import employeesReducer from "./employeesSlice"
import { useSelector, TypedUseSelectorHook, useDispatch } from "react-redux"

export const store = configureStore({
  reducer: {
    employees: employeesReducer,
  },
})

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

//typed useSelector
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
//typed useDispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()

export const selectEmployees = (state: RootState) => state.employees.data
