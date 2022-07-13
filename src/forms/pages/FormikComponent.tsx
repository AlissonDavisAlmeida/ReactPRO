import { ErrorMessage, Field, Form, Formik } from "formik";
import "../styles/styles.css"
import * as Yup from "yup"

function FormikComponent() {


    return (
        <div>
            <h1>Formik Components</h1>

            <Formik
                initialValues={{
                    firstName: "",
                    lastName: "",
                    email: "",
                    terms: false,
                    jobType: "",
                }}
                onSubmit={(values) => {
                    console.log(values);

                }}
                validationSchema={Yup.object({
                    firstName: Yup.string().required("Required").max(15, "Must be 15 characters or less"),
                    lastName: Yup.string().required("Required").max(10, "Must be 10 characters or less"),
                    email: Yup.string().required("Required").email("Invalid email address"),
                    terms: Yup.boolean().oneOf([true], "You must accept the terms and conditions"),
                    jobType: Yup.string()
                                .required("Required")
                                .notOneOf(["", "None"], "You must select a job type")
                })}

            >
                {
                    formik => (
                        <Form>
                            <label htmlFor="firstName">First Name</label>
                            <Field name="firstName" type="text" />
                            <ErrorMessage name="firstName" component="span" />

                            <label htmlFor="lastName">Last Name</label>
                            <Field name="lastName" type="text" />
                            <ErrorMessage name="lastName" component="span" />

                            <label htmlFor="email">Email</label>
                            <Field name="email" type="email" />
                            <ErrorMessage name="email" component="span" />

                            <label htmlFor="jobType">JobType</label>
                            <Field name="jobType" type="jobType" as="select">

                                <option value="developer">Developer</option>
                                <option value="developer">Developer</option>
                                <option value="developer">Developer</option>
                            </Field>
                            <ErrorMessage name="jobType" component="span" />

                            <label>
                                <Field name="terms" type="checkbox" />
                                Terms
                            </label>
                            <ErrorMessage name="terms" component="span" />


                            <button type="submit">Submit</button>
                        </Form>
                    )
                }

            </Formik>


        </div>
    );
}

export default FormikComponent;