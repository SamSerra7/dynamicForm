import { screen } from "@testing-library/react"
import ThankYou from "../components/ThankYou"
import { renderWithProvider } from "./utils"
import { store } from "../store"
import { User } from "../types/User"

describe("ThankYou", () => {
    beforeEach(() => {
        renderWithProvider(<ThankYou />)
    })

    it("should render correctly the non-dynamic fields", () => {
        expect(screen.queryByText(/Thank you/i)).toBeTruthy()
    })

    it("should load correctly redux state", () => {
        const state = store.getState().user
        expect(state.data).toEqual({} as User)
    })
})
