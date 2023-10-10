"use client"
import { states } from "@/data/states"
import { useForm, FormProvider } from "react-hook-form"
import styles from "@/styles/Form.module.scss"
import { departments } from "@/data/departments"
import FormInput from "./FormInput"
import { FormData } from "@/models/types"
import FormDatePicker from "./FormDatePicker"

const Form = () => {
  const methods = useForm<FormData>({
    mode: "onBlur",
  })

  const onSubmit = methods.handleSubmit((data) => {
    // console.log(data)
    alert(JSON.stringify(data))
    methods.reset()
  })

  return (
    <FormProvider {...methods}>
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
            <FormDatePicker label="Date of Birth" name="birthDate" />
            <FormDatePicker label="Date of Start" name="startDate" />
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
            <label>
              State
              <div className={styles.select_wrapper}>
                <select
                  {...methods.register("state", {
                    required: "The state is required",
                  })}
                  className={styles.select}
                >
                  <option key="0" value="">
                    Select...
                  </option>
                  {states.map((state) => (
                    <option key={state.abbreviation} value={state.abbreviation}>
                      {state.name}
                    </option>
                  ))}
                </select>
              </div>
            </label>
            {methods.formState.errors?.state && (
              <p>
                {methods.formState.errors?.state?.message ||
                  "State is required"}
              </p>
            )}
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
        <label>
          Department
          <div className={styles.select_wrapper}>
            <select
              {...methods.register("dept", {
                required: "The department is required",
              })}
              className={styles.select}
            >
              <option key="0" value="">
                Select...
              </option>
              {departments.map((dept) => (
                <option key={dept} value={dept}>
                  {dept}
                </option>
              ))}
            </select>
          </div>
        </label>
        {methods.formState.errors?.dept && (
          <p>
            {methods.formState.errors?.dept?.message ||
              "Department is required"}
          </p>
        )}
        <div className={styles.submit}>
          <input
            type="submit"
            value="Create"
            disabled={!methods.formState.isValid}
          />
        </div>
      </form>
    </FormProvider>
  )
}

export default Form
