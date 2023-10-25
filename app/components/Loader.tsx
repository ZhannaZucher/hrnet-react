import { Circles } from "react-loader-spinner"

type LoaderProps = {
  className?: string
}

const Loader = ({ className }: LoaderProps) => {
  return (
    <Circles
      height="60"
      width="60"
      color="#94ad18f6"
      ariaLabel="circles-loading"
      wrapperClass={className}
      visible={true}
    />
  )
}

export default Loader
