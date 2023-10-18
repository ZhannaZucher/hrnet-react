"use client"

import { employees } from "@/data/employees"
import { AppState, Employee } from "@/models/types"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState: AppState = {
  data: employees,
}

const employeesSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    addEmployee(state, action: PayloadAction<Employee>) {
      state.data.push(action.payload)
    },
  },
})

export const { addEmployee } = employeesSlice.actions
export default employeesSlice.reducer
