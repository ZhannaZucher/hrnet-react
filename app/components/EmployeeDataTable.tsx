"use client"
import { useMemo } from "react"
import DataTable, { TableColumn } from "react-data-table-component"
import { selectEmployees, useAppSelector } from "../store/store"
import { Employee } from "@/models/types"

// const paginationComponentOptions = {
//   rowsPerPageText: "Employees per page",
//   selectAllRowsItem: true,
//   selectAllRowsItemText: "All",
// }

const EmployeeDataTable = () => {
  // useMemo will only be created once
  const columns: TableColumn<Employee>[] = useMemo(
    () => [
      { name: "First Name", selector: (row) => row.firstName, sortable: true },
      { name: "Last Name", selector: (row) => row.lastName, sortable: true },
      { name: "Start Date", selector: (row) => row.startDate, sortable: true },
      { name: "Department", selector: (row) => row.dept, sortable: true },
      {
        name: "Date of Birth",
        selector: (row) => row.birthDate,
        sortable: true,
      },
      { name: "Street", selector: (row) => row.street, sortable: true },
      { name: "City", selector: (row) => row.city, sortable: true },
      { name: "State", selector: (row) => row.state, sortable: true },
      { name: "Zip Code", selector: (row) => row.zipCode, sortable: true },
    ],
    []
  )
  const employees = useAppSelector(selectEmployees)
  return (
    <DataTable
      columns={columns}
      data={employees}
      // pagination
      // paginationComponentOptions={paginationComponentOptions}
    />
  )
}

export default EmployeeDataTable
