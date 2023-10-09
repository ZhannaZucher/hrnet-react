"use client"
import { states } from "@/data/states"
import { useForm } from "react-hook-form"
import styles from "@/styles/Form.module.scss"
import { departments } from "@/data/departments"
import FormInput, { FormData } from "./FormInput"

const Form = () => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm<FormData>({
    mode: "onBlur",
  })

  const onSubmit = handleSubmit((data) => {
    // console.log(data)
    alert(JSON.stringify(data))
    reset()
  })

  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <div className={styles.wrapper}>
        <div className={styles.flex}>
          <FormInput
            type="text"
            label="First Name"
            name="firstName"
            errors={errors}
            register={register}
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
            errors={errors}
            register={register}
            validationSchema={{
              required: "This field is required",
              pattern: {
                value: /[A-Za-z]{2}/,
                message: "Enter at least 2 caracters",
              },
            }}
          />
          <label>
            Date of Birth
            <input type="text" />
          </label>
          <label>
            Start Date
            <input type="text" />
          </label>
        </div>
        <div className={styles.flex}>
          <FormInput
            type="text"
            label="Street"
            name="street"
            errors={errors}
            register={register}
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
            errors={errors}
            register={register}
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
                {...register("state", {
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
          {errors?.state && (
            <p>{errors?.state?.message || "State is required"}</p>
          )}
          <FormInput
            type="number"
            label="Zip Code"
            name="zipCode"
            errors={errors}
            register={register}
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
            {...register("dept", {
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
      {errors?.dept && (
        <p>{errors?.dept?.message || "Department is required"}</p>
      )}

      <div className={styles.submit}>
        <input type="submit" value="Create" disabled={!isValid} />
      </div>
    </form>
  )
}

export default Form
