import React from "react"

type FilterProps = {
  onFilter: React.ChangeEventHandler<HTMLInputElement>
  onClear: () => void
  filterText: string | number
}

const FilterDataTable = ({ onFilter, onClear, filterText }: FilterProps) => {
  return (
    <div>
      <input type="text" value={filterText} onChange={onFilter} />
      <button onClick={onClear}>x</button>
    </div>
  )
}

export default FilterDataTable
