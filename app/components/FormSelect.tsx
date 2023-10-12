// import Select from "react-select"
"use client"
import { useFormContext, Controller, Path } from "react-hook-form"
import { FormData } from "@/models/types"
import React, { useId } from "react"
import ReactSelect from "react-select"

type SelectProps = {
  label: string
  name: Path<FormData>
  options: any[]
}

const FormSelect = ({ label, name, options }: SelectProps) => {
  const {
    control, //object containing methods for registering components into React Hook Form
    formState: { errors },
  } = useFormContext() // Retrieve all hook methods from the <FormProvider />
  const id = useId()
  return (
    <>
      <label>
        {label}
        <Controller
          control={control}
          name={name}
          rules={{ required: true }}
          render={({ field }) => (
            <ReactSelect
              // {...field}
              instanceId={id}
              defaultValue={null}
              value={field.value}
              onChange={field.onChange}
              options={options}
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

export default FormSelect
