import { useSelector } from "react-redux"
import { RootState } from "../store"
import FormType from "../types/FormTypes"

const ThankYou = () => {
    const { user, form } = useSelector((state: RootState) => state)
    return (
        <div
            style={{
                width: "100vw",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                backgroundColor: "#00568f",
                backgroundImage:
                    "url('https://www.transparenttextures.com/patterns/asfalt-light.png')",
            }}
        >
            {user ? (
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <h1 style={{ textAlign: "center" }}>Thank you for applying!</h1>
                    {Array.isArray(form.form) &&
                        form.form.map((field: FormType, i) => (
                            <div
                                key={`thank-you-${i}`}
                                style={{
                                    display: "flex",
                                    backgroundColor: "#EEF5FF",
                                    color: "#00568f",
                                    justifyContent: "center",
                                    gap: "2%",
                                    width: "100%",
                                    fontSize: "1.2rem",
                                }}
                            >
                                {Array.isArray(field) ? (
                                    field.map((f: FormType) => (
                                        <h3 key={`thank-you${f.id}`}>
                                            {user.data[f.id as keyof typeof user.data]}
                                        </h3>
                                    ))
                                ) : (
                                    <h3>{user.data[field.id as keyof typeof user.data]}</h3>
                                )}
                            </div>
                        ))}
                </div>
            ) : (
                <h1>Oops you need to complete the form first</h1>
            )}
        </div>
    )
}

export default ThankYou
