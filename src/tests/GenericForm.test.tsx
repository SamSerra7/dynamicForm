import { screen } from "@testing-library/react"
import GenericForm from "../components/GenericForm"
import { store } from "../store"
import FormType from "../types/FormTypes"
import { renderWithProvider } from "./utils"

describe("GenericForm", () => {
    beforeEach(() => {
        renderWithProvider(<GenericForm />)
    })

    it("should render correctly the non-dynamic fields", () => {
        expect(screen.queryByText("Please Submit your appplication")).toBeTruthy()
        expect(document.querySelector("form")).toBeTruthy()
        expect(document.querySelector("button")).toBeTruthy()
    })

    it("should load correctly redux state", () => {
        const state = store.getState().form
        expect(state.form).toEqual(Array<FormType[]>)
    })
})
