"use client"
import { useMemo, useState, useEffect } from "react"
import DataTable, { TableColumn } from "react-data-table-component"
import { selectEmployees, useAppSelector } from "../store/store"
import { Employee } from "@/models/types"
import FilterDataTable from "./FilterDataTable"
import { customStyles, filterData } from "@/utils/dataTableUtils"
import Loader from "./Loader"
import styles from "@/styles/DataTable.module.scss"

const paginationComponentOptions = {
  rowsPerPageText: "Employees per page",
  selectAllRowsItem: true,
  selectAllRowsItemText: "All",
}

const EmployeeDataTable = () => {
  const employees = useAppSelector(selectEmployees)
  const [filterText, setFilterText] = useState("")
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false)
  const filteredData = filterData(employees, filterText)
  const [loader, setLoader] = useState(true)

  useEffect(() => {
    setLoader(false)
  }, [])

  // optimization : columns with useMemo will only be created once
  const columns: TableColumn<Employee>[] = useMemo(
    () => [
      { name: "First Name", selector: (row) => row.firstName, sortable: true },
      { name: "Last Name", selector: (row) => row.lastName, sortable: true },
      {
        name: "Start Date",
        selector: (row) => row.startDate,
        sortable: true,
        compact: true,
      },
      { name: "Department", selector: (row) => row.dept, sortable: true },
      {
        name: "Date of Birth",
        selector: (row) => row.birthDate,
        sortable: true,
        compact: true,
      },
      {
        name: "Street",
        selector: (row) => row.street,
        sortable: true,
        minWidth: "180px",
      },
      {
        name: "City",
        selector: (row) => row.city,
        sortable: true,
      },
      {
        name: "State",
        selector: (row) => row.state,
        sortable: true,
        width: "90px",
        compact: true,
      },
      {
        name: "Zip Code",
        selector: (row) => row.zipCode,
        sortable: true,
        width: "110px",
        compact: true,
      },
    ],
    []
  )

  //handle filter input and pagination reset
  const subHeaderFilter = useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle)
        setFilterText("")
      }
    }
    return (
      <FilterDataTable
        onFilter={(e) => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
      />
    )
  }, [filterText, resetPaginationToggle])

  if (loader) {
    return (
      <div>
        <Loader className={styles.loader} />
      </div>
    )
  }

  return (
    <section className={styles.wrapper}>
      <DataTable
        columns={columns}
        data={filteredData}
        pagination
        paginationComponentOptions={paginationComponentOptions}
        paginationRowsPerPageOptions={[10, 25, 50]}
        paginationResetDefaultPage={resetPaginationToggle} // reset pagination to page 1
        fixedHeader
        fixedHeaderScrollHeight="400px"
        subHeader // Display the input search
        subHeaderComponent={subHeaderFilter} // Reset input search and pagination
        customStyles={customStyles}
      />
    </section>
  )
}

export default EmployeeDataTable
