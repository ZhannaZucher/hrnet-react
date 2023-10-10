import DatePicker from "react-datepicker"
import { useFormContext, Controller, Path } from "react-hook-form"
import "react-datepicker/dist/react-datepicker.css"
import { FormData } from "@/models/types"

type Props = {
  label: string
  name: Path<FormData>
}

const FormDatePicker = ({ name, label }: Props) => {
  const {
    control,
    formState: { errors },
  } = useFormContext() // Retrieve hook methods from the <FormProvider />
  return (
    <>
      <label>
        {label}
        <Controller
          control={control}
          name={name}
          rules={{ required: true }}
          render={({ field }) => (
            <DatePicker
              selected={field.value}
              onChange={field.onChange}
              onBlur={field.onBlur}
            />
          )}
        />
      </label>
      {errors && errors[name]?.type === "required" && (
        <p>This field is required</p>
      )}
    </>
  )
}

export default FormDatePicker
