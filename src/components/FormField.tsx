interface FormFieldProps {
    id: string
    type: string
    options?: Array<string>
    placeholder?: string
    required?: boolean
    pattern?: string
}

const FormField = (props: FormFieldProps) => {
    if (props.type === "textarea") {
        return (
            <textarea
                data-testid={props.id}
                id={props.id}
                name={props.id}
                aria-label={props.id}
                placeholder={props.placeholder || props.id}
                required={props.required}
                style={{
                    width: "100%",
                    paddingBottom: "10%",
                    borderRadius: "8px",
                    fontSize: "1.1rem",
                }}
            />
        )
    } else if (props.type === "select") {
        return (
            <select
                data-testid={props.id}
                id={props.id}
                name={props.id}
                aria-label={props.id}
                placeholder={props.placeholder || props.id}
                required={props.required}
                style={{ width: "100%", borderRadius: "8px", fontSize: "1.1rem" }}
            >
                {props.options?.map(option => (
                    <option key={option}>{option}</option>
                ))}
            </select>
        )
    } else {
        return (
            <input
                data-testid={props.id}
                id={props.id}
                name={props.id}
                type={props.type}
                aria-label={props.id}
                placeholder={props.placeholder || props.id}
                required={props.required}
                style={{ width: "100%", borderRadius: "8px", fontSize: "1.1rem" }}
                pattern={props.pattern}
            />
        )
    }
}

export default FormField
