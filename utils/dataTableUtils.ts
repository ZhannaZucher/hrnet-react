import { Employee } from "@/models/types"

//checks matches with filter query in employee data
export function filterData(
  data: Array<Employee>,
  query: string
): Array<Employee> {
  return data.filter(
    (employee) =>
      (employee.firstName &&
        employee.firstName.toLowerCase().includes(query.toLowerCase())) ||
      (employee.lastName &&
        employee.lastName.toLowerCase().includes(query.toLowerCase())) ||
      (employee.startDate &&
        employee.startDate.toLowerCase().includes(query.toLowerCase())) ||
      (employee.dept &&
        employee.dept.toLowerCase().includes(query.toLowerCase())) ||
      (employee.birthDate &&
        employee.birthDate.toLowerCase().includes(query.toLowerCase())) ||
      (employee.street &&
        employee.street.toLowerCase().includes(query.toLowerCase())) ||
      (employee.city &&
        employee.city.toLowerCase().includes(query.toLowerCase())) ||
      (employee.state &&
        employee.state.toLowerCase().includes(query.toLowerCase())) ||
      (employee.zipCode &&
        employee.zipCode.toLowerCase().includes(query.toLowerCase()))
  )
}

//overrides default dataTable styles
export const customStyles = {
  headCells: {
    style: {
      marginTop: "16px",
      height: "40px",
      color: "#6f870f",
      fontWeight: "bolder",
      fontSize: "12px",
    },
  },
  cells: {
    style: {
      fontSize: "12px",
    },
  },
}
