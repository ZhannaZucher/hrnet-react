import { Data, FormattedOptions } from "@/models/types"

//format states & depts data array to be conforme with react-select options array
export function formatOptions(data: Data): Array<FormattedOptions> {
  const formattedData: Array<FormattedOptions> = []
  data.map((element) => {
    if (typeof element === "string") {
      formattedData.push({
        value: element,
        label: element,
      })
    } else {
      formattedData.push({
        value: element.abbreviation,
        label: element.name,
      })
    }
  })
  return formattedData
}
