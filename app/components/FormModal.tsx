import { PropsWithChildren } from "react"
import "@/styles/Modal.scss"

type HandleModalProps = PropsWithChildren<{
  active: boolean
  setActive: (value: boolean) => void
}>

const FormModal = ({ active, setActive, children }: HandleModalProps) => {
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? "modal__content active" : "modal__content"}
        onClick={(e) => e.stopPropagation()}
      >
        <span id="modal__close" onClick={() => setActive(false)}>
          x
        </span>
        {children}
      </div>
    </div>
  )
}

export default FormModal
