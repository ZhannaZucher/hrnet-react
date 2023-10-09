"use client"
import { states } from "@/data/states"
import { useForm } from "react-hook-form"
import styles from "@/styles/Form.module.scss"
import { departments } from "@/data/departments"

type FormData = {
  firstName: string
  lastName: string
  //   birthDate: string
  //   startDate: string
  street: string
  city: string
  state: string
  zipCode: string
  dept: string
}

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
          <label>
            First Name
            <input
              type="text"
              {...register("firstName", {
                required: "This field is required",
                pattern: {
                  value: /[A-Za-z]{2}/,
                  message: "Enter at least 2 caracters",
                },
              })}
            />
          </label>
          {errors?.firstName && (
            <p>{errors?.firstName?.message || "First name is required"}</p>
          )}
          <label>
            Last Name
            <input
              type="text"
              {...register("lastName", {
                required: "This field is required",
                pattern: {
                  value: /[A-Za-z]{2}/,
                  message: "Enter at least 2 caracters",
                },
              })}
            />
          </label>
          {errors?.lastName && (
            <p>{errors?.lastName?.message || "Last name is required"}</p>
          )}
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
          <label>
            Street
            <input
              type="text"
              {...register("street", {
                required: "This field is required",
                pattern: {
                  value: /[A-Za-z0-9]{5}/,
                  message: "Enter at least 5 caracters",
                },
              })}
            />
          </label>
          {errors?.street && (
            <p>{errors?.street?.message || "Street is required"}</p>
          )}
          <label>
            City
            <input
              type="text"
              {...register("city", {
                required: "This field is required",
                pattern: {
                  value: /[A-Za-z]{2}/,
                  message: "Enter at least 2 caracters",
                },
              })}
            />
          </label>
          {errors?.city && <p>{errors?.city?.message || "City is required"}</p>}
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
          <label>
            Zip Code
            <input
              type="number"
              {...register("zipCode", {
                required: "This field is required",
                pattern: {
                  value: /[0-9]{5}/,
                  message: "Enter 5 digits",
                },
              })}
            />
          </label>
          {errors?.zipCode && (
            <p>{errors?.zipCode?.message || "Zip Code is required"}</p>
          )}
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
