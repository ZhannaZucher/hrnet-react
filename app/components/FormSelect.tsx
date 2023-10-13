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
              instanceId={id}
              isSearchable
              noOptionsMessage={() => "No options found"}
              value={field.value}
              onChange={field.onChange}
              options={options}
              onBlur={field.onBlur}
              theme={(theme) => ({
                ...theme,
                border: "1px solid #94ad18f6",
                colors: {
                  ...theme.colors,
                  primary25: "#94ad18f6",
                  primary: "#94ad18f6",
                },
              })}
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  fontWeight: "normal",
                  border: "1px solid #94ad18f6",
                  borderRadius: "4px",
                  boxShadow: state.isFocused ? "0 0 4px #94ad18f6" : "none",
                }),
                option: (baseStyles, state) => ({
                  ...baseStyles,
                  fontWeight:
                    state.isFocused || state.isSelected ? "bold" : "normal",
                  color: state.isFocused ? "white" : "inherit",
                }),
                noOptionsMessage: (baseStyles) => ({
                  ...baseStyles,
                  fontWeight: "normal",
                  color: "#bf1650",
                }),
              }}
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
