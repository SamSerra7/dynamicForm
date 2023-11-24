import FormField from "../components/FormField"
import { render, screen } from "@testing-library/react"

const PROPS_FOR_TEXTAREA = {
    id: "reason",
    placeholder: "Describe why you are a good fit for the job you are applying for.",
    type: "textarea",
}
const PROPS_FOR_SELECT = {
    id: "jobTitle",
    options: [
        "Engineer - lead",
        "Engineer - mid level",
        "Engineer - junior",
        "Engineer - front end focused",
        "Engineer - backend focused",
        "Engineer - full stack",
    ],
    placeholder: "Please select job title",
    type: "select",
}
// type=[text,email,phone(tel)]
const PROPS_FOR_INPUT = [
    {
        id: "firstName",
        placeholder: "First name",
        required: true,
        type: "text",
    },
    {
        id: "Email",
        placeholder: "Email",
        required: true,
        type: "email",
    },
    {
        id: "phone",
        placeholder: "Phone (###-###-####)",
        required: true,
        type: "tel",
        pattern: "[0-9]{3}-[0-9]{3}-[0-9]{4}",
    },
]

describe("FormField", () => {
    it("should render the textarea if type is textarea", () => {
        render(<FormField {...PROPS_FOR_TEXTAREA} />)
        expect(document.querySelector("textarea")).toBeTruthy()
        expect(screen.getByPlaceholderText(PROPS_FOR_TEXTAREA.placeholder)).toBeTruthy()
        expect(screen.getByTestId(PROPS_FOR_TEXTAREA.id)).toBeTruthy()
    })
    it("should render the select if type is select", () => {
        render(<FormField {...PROPS_FOR_SELECT} />)
        expect(document.querySelector("select")).toBeTruthy()
        expect(screen.getByPlaceholderText(PROPS_FOR_SELECT.placeholder)).toBeTruthy()
        expect(screen.getByTestId(PROPS_FOR_SELECT.id)).toBeTruthy()
    })
    it("should render all the correct options of the select", () => {
        render(<FormField {...PROPS_FOR_SELECT} />)
        expect(document.querySelector("option")).toBeTruthy()
        // evaluates if the screen contains all the array options
        PROPS_FOR_SELECT.options.map(option => expect(screen.getByText(option)).toBeTruthy())
    })
    it("should render correctly all kinds of inputs", () => {
        PROPS_FOR_INPUT.map(input => {
            render(<FormField {...input} />)
            expect(document.querySelector("input")).toBeTruthy()
            expect(screen.getByPlaceholderText(input.placeholder)).toBeTruthy()
            expect(screen.getByTestId(input.id)).toBeTruthy()
            if (input.type === "tel") {
                expect(screen.getByTestId(input.id)).toHaveProperty("pattern", input.pattern)
            }
        })
    })
})
