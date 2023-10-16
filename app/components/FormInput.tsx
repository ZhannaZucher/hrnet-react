import { FormData } from "@/models/types"
import { Path, UseFormRegister, type FieldErrorsImpl } from "react-hook-form"

type InputProps = {
  type: string
  label: string
  name: "firstName" | "lastName" | "street" | "city" | "zipCode"
  register: UseFormRegister<FormData>
  validationSchema: any
  errors: Partial<FieldErrorsImpl<FormData>>
}

const FormInput = ({
  type,
  label,
  name,
  register,
  validationSchema,
  errors,
}: InputProps) => {
  return (
    <>
      <label>
        {label}
        <input type={type} {...register(name, validationSchema)} />
      </label>
      {errors && errors[name]?.type === "required" && (
        <p>{errors[name]?.message}</p>
      )}
      {errors && errors[name]?.type === "pattern" && (
        <p>{errors[name]?.message}</p>
      )}
    </>
  )
}

export default FormInput
