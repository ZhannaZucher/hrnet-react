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
    control, //object containing methods for registering components into React Hook Form
    formState: { errors },
  } = useFormContext() // Retrieve all hook methods from the <FormProvider />
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
              selected={field.value} //the current value of the controlled component
              onChange={field.onChange} //sends the input's value to hook form
              onBlur={field.onBlur} //sends the input's onBlur event to hook form
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
