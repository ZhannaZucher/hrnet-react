"use client"
import { states } from "@/data/states"
import { useForm, FormProvider } from "react-hook-form"
import styles from "@/styles/Form.module.scss"
import { departments } from "@/data/departments"
import FormInput from "./FormInput"
import { FormData } from "@/models/types"
import FormDatePicker from "./FormDatePicker"
import FormSelect from "./FormSelect"
import { formatOptions } from "@/utils/formatData"

const Form = () => {
  //object containing methods for registering components into React Hook Form
  const methods = useForm<FormData>({
    mode: "onBlur", //indicates when the error message appears
    defaultValues: {
      firstName: "",
      lastName: "",
      birthDate: undefined,
      startDate: undefined,
      street: "",
      city: "",
      state: "",
      zipCode: "",
      dept: "",
    },
  })

  const onSubmit = methods.handleSubmit((data) => {
    alert(JSON.stringify(data))
    methods.reset()
  })

  const deptsOptions = formatOptions(departments)
  const statesOptions = formatOptions(states)

  return (
    <FormProvider {...methods}>
      {/* pass all form methods into the context */}
      <form onSubmit={onSubmit} className={styles.form}>
        <div className={styles.wrapper}>
          <div className={styles.flex}>
            <FormInput
              type="text"
              label="First Name"
              name="firstName"
              errors={methods.formState.errors}
              register={methods.register}
              validationSchema={{
                required: "This field is required",
                pattern: {
                  value: /[A-Za-z]{2}/,
                  message: "Enter at least 2 caracters",
                },
              }}
            />
            <FormInput
              type="text"
              label="Last Name"
              name="lastName"
              errors={methods.formState.errors}
              register={methods.register}
              validationSchema={{
                required: "This field is required",
                pattern: {
                  value: /[A-Za-z]{2}/,
                  message: "Enter at least 2 caracters",
                },
              }}
            />
            <FormDatePicker
              label="Date of Birth"
              name="birthDate"
              endWith={new Date()} //dates range ends with today's date
            />
            <FormDatePicker
              label="Date of Start"
              name="startDate"
              startFrom={methods.getValues("birthDate") || null} //if the date of birth is already entered, dates to pick start from the date of birth OR null
            />
          </div>
          <div className={styles.flex}>
            <FormInput
              type="text"
              label="Street"
              name="street"
              errors={methods.formState.errors}
              register={methods.register}
              validationSchema={{
                required: "This field is required",
                pattern: {
                  value: /[A-Za-z0-9]{5}/,
                  message: "Enter at least 5 caracters",
                },
              }}
            />
            <FormInput
              type="text"
              label="City"
              name="city"
              errors={methods.formState.errors}
              register={methods.register}
              validationSchema={{
                required: "This field is required",
                pattern: {
                  value: /[A-Za-z]{2}/,
                  message: "Enter at least 2 caracters",
                },
              }}
            />
            <FormSelect label="State" name="state" options={statesOptions} />
            <FormInput
              type="number"
              label="Zip Code"
              name="zipCode"
              errors={methods.formState.errors}
              register={methods.register}
              validationSchema={{
                required: "This field is required",
                pattern: {
                  value: /[0-9]{5}/,
                  message: "Enter 5 digits",
                },
              }}
            />
          </div>
        </div>
        <FormSelect label="Department" name="dept" options={deptsOptions} />
        <div className={styles.submit}>
          <input
            type="submit"
            value="Create"
            disabled={!methods.formState.isValid} //submit btn disabled until all form fields are valid
          />
        </div>
      </form>
    </FormProvider>
  )
}

export default Form
