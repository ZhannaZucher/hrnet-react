type FormattedDepts = {
  value: string
  label: string
}

export function formatDepartments(data: string[]): Array<FormattedDepts> {
  const formattedData: Array<FormattedDepts> = []
  data.map((element) => {
    formattedData.push({
      value: element,
      label: element,
    })
  })
  return formattedData
}
