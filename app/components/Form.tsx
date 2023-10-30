"use client"
import { useState } from "react"
import { states } from "@/data/states"
import { useForm, FormProvider } from "react-hook-form"
import styles from "@/styles/Form.module.scss"
import { departments } from "@/data/departments"
import FormInput from "./FormInput"
import { FormData } from "@/models/types"
import FormDatePicker from "./FormDatePicker"
import FormSelect from "./FormSelect"
import { formatOptions } from "@/utils/formatData"
import { Modal } from "zz-modal"
import { useAppDispatch } from "../store/store"
import { addEmployee } from "../store/employeesSlice"

const Form = () => {
  const [modalActive, setModalActive] = useState(false)

  const dispatch = useAppDispatch()

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

  //subscribe for birthDate input value watching for further handling startDate input rules
  const birthDateInputValue = methods.watch("birthDate")

  const onSubmit = methods.handleSubmit((data) => {
    //modeling employee object from form's data
    const employee = {
      firstName: data.firstName,
      lastName: data.lastName,
      birthDate: data.birthDate.toLocaleDateString("en-US"),
      startDate: data.startDate.toLocaleDateString("en-US"),
      street: data.street,
      city: data.city,
      state: typeof data.state !== "string" && data.state.value,
      zipCode: data.zipCode,
      dept: typeof data.dept !== "string" && data.dept.value,
    }
    dispatch(addEmployee(employee))
    setModalActive(true)
    methods.reset()
  })

  //format data for react-select components
  const deptsOptions = formatOptions(departments)
  const statesOptions = formatOptions(states)

  return (
    <>
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
                startFrom={
                  birthDateInputValue ? methods.getValues("birthDate") : null
                } //if the date of birth is already entered, dates to pick start from the date of birth OR null
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
      <Modal
        active={modalActive}
        setActive={setModalActive}
        customClass={styles.confirmation}
      >
        <p>Employee created !</p>
      </Modal>
    </>
  )
}

export default Form
