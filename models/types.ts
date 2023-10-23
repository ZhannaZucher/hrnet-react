export type FormattedOptions = {
  value: string
  label: string
}

type States = {
  name: string
  abbreviation: string
}

export type Data = Array<States> | string[]

type SelectField = {
  value: string
  label: string
}

export type FormData = {
  firstName: string
  lastName: string
  birthDate: Date
  startDate: Date
  street: string
  city: string
  state: SelectField | string
  zipCode: string
  dept: SelectField | string
}

export type Employee = {
  firstName: string
  lastName: string
  birthDate: string
  startDate: string
  street: string
  city: string
  state: string | false
  zipCode: string
  dept: string | false
}

export type AppState = {
  data: Array<Employee>
}
