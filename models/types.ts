export type FormData = {
  firstName: string
  lastName: string
  birthDate: Date
  startDate: Date
  street: string
  city: string
  state: string
  zipCode: string
  dept: string
}

export type FormattedOptions = {
  value: string
  label: string
}

type States = {
  name: string
  abbreviation: string
}

export type Data = Array<States> | string[]
