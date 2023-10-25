import styles from "@/styles/DataTable.module.scss"

type FilterProps = {
  onFilter: React.ChangeEventHandler<HTMLInputElement>
  onClear: () => void
  filterText: string | number
}

const FilterDataTable = ({ onFilter, onClear, filterText }: FilterProps) => {
  return (
    <div className={styles.filter}>
      <input
        type="text"
        value={filterText}
        onChange={onFilter}
        placeholder="filter..."
      />
      <button onClick={onClear}>&#10008;</button>
    </div>
  )
}

export default FilterDataTable
