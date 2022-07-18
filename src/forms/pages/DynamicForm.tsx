import { Form, Formik } from "formik"
import { MySelectInput, MyTextInput } from "../components"
import formJSON from "../data/custom-form.json"
import * as Yup from "yup"

export const DynamicForm = () => {

    const initialValues: { [key: string]: any } = {}
    const requiredFields: { [key: string]: any } = {}

    formJSON.map(field => {
        initialValues[field.name] = field.value

        if (field.validations) {
            let schema = Yup.string()
            field.validations.map(validation => {
                if (validation.type === "required") {
                    schema = schema.required(validation.message)
                }
            })

            requiredFields[field.name] = schema
        }
    })

    return (
        <div>
            <h1>Dynamic Form</h1>

            <Formik
                initialValues={initialValues}
                onSubmit={(values) => {
                    console.log(values)
                }}
                validationSchema={Yup.object({
                    ...requiredFields
                })}
            >
                {(formik) => (


                    <Form>
                        {formJSON.map((field, index) => {

                            switch (field.type) {
                                case "input":
                                    return <MyTextInput
                                        key={index}
                                        label={field.label}
                                        name={field.name}
                                        type={field.type as any} />
                                case "email":
                                    return <MyTextInput
                                        key={index}
                                        label={field.label}
                                        name={field.name}
                                        type={field.type as any} />
                                case "select":
                                    return <MySelectInput
                                        key={index}
                                        label={field.label}
                                        name={field.name}
                                    >
                                        {field.options!.map((option, index) => {
                                            return <option key={option.id} value={option.label}>{option.label}</option>
                                        })
                                        }
                                    </MySelectInput>
                            }

                        })}
                        <button>Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}