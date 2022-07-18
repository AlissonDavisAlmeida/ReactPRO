import { Form, Formik } from "formik"
import { MyTextInput } from "../components"
import formJSON from "../data/custom-form.json"

export const DynamicForm = () => {

    const initialValues: { [key: string]: any } = {}

    formJSON.map(field => {
        initialValues[field.name] = field.value
    })

    return (
        <div>
            <h1>Dynamic Form</h1>

            <Formik
                initialValues={initialValues}
                onSubmit={(values) => {
                    console.log(values)
                }}
            >
                {(formik) => (


                    <Form>
                        {formJSON.map((field, index) => {
                            return (
                                <MyTextInput
                                    key={index}
                                    label={field.label}
                                    name={field.name}
                                    type={field.type as any} />
                            )
                        })}
                        <button>Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}