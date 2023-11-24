import { FormEvent, useEffect } from "react"
import fieldSet from "../assets/field-set.txt"
import { useDispatch, useSelector } from "react-redux"
import { setForm } from "../store/form-slice"
import { RootState } from "../store"
import FormField from "./FormField"
import { setUser } from "../store/user-slice"
import { useNavigate } from "react-router-dom"

const GenericForm = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const formStructure = useSelector((state: RootState) => state.form)

    useEffect(() => {
        fetch(fieldSet)
            .then(text => text.json())
            .then(res => dispatch(setForm(res)))
            .catch(err => console.error(err))
    }, [dispatch])

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const data = Object.fromEntries(formData.entries())
        dispatch(setUser(data))
        navigate("/thank-you")
    }

    return (
        <div
            style={{
                width: "100vw",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                backgroundColor: "#00566f",
                backgroundImage:
                    "url('https://www.transparenttextures.com/patterns/asfalt-light.png')",
            }}
        >
            {formStructure.form.length ? (
                <form onSubmit={onSubmit}>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <h1 style={{ color: "white", textAlign: "center" }}>
                            Please Submit your appplication
                        </h1>
                        {Array.isArray(formStructure.form) &&
                            formStructure.form.map((field, i) => (
                                <div
                                    key={`form-input-${i}`}
                                    style={{
                                        display: "flex",
                                        marginTop: "4%",
                                        gap: "4%",
                                        justifyContent: "space-between",
                                        width: "100%",
                                    }}
                                >
                                    {Array.isArray(field) ? (
                                        field.map(f => <FormField key={f.id} {...f} />)
                                    ) : (
                                        <FormField {...field} />
                                    )}
                                </div>
                            ))}

                        <button type="submit" style={{ marginTop: "6%" }}>
                            Submit Application!
                        </button>
                    </div>
                </form>
            ) : (
                <h1>There are no form fields to show</h1>
            )}
        </div>
    )
}

export default GenericForm
