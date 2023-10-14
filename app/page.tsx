"use client"
import { useState } from "react"
import Form from "./components/Form"
import FormModal from "./components/FormModal"

export default function Home() {
  const [modalActive, setModalActive] = useState(false)
  return (
    <main>
      <h2>Create Employee</h2>
      <Form setActive={setModalActive} />
      <FormModal active={modalActive} setActive={setModalActive}>
        <p>Employee created !</p>
      </FormModal>
    </main>
  )
}
