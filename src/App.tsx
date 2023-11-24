import { Route, Routes } from "react-router-dom"
import GenericForm from "./components/GenericForm"
import ThankYou from "./components/ThankYou"

function App() {
    return (
        <main>
            <Routes>
                <Route path={"/"} element={<GenericForm />} />
                <Route path={"/thank-you"} element={<ThankYou />} />
            </Routes>
        </main>
    )
}

export default App
