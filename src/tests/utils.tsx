import { render } from "@testing-library/react"
import { ReactNode } from "react"
import { Provider } from "react-redux"
import { store } from "../store"
import { BrowserRouter } from "react-router-dom"

export const renderWithProvider = (component: ReactNode) =>
    render(
        <BrowserRouter>
            <Provider store={store}>{component}</Provider>
        </BrowserRouter>,
    )
