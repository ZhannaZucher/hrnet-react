import { Employee } from "@/models/types"

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
