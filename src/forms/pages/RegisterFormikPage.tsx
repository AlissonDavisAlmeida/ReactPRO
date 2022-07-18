import { Form, Formik } from "formik"
import * as Yup from "yup"
import { MyTextInput } from "../components"
import "../styles/styles.css"


function RegisterFormikPage() {




    return (
        <div>
            <Formik
                initialValues={{
                    name: "",
                    email: "",
                    password: "",
                    confirmPassword: ""
                }}

                onSubmit={(values) => {
                    console.log(values)
                }}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .required("Name is required")
                        .min(3, "Name must be at least 3 characters")
                        .max(15, "Name must be 15 characters or less"),
                    email: Yup.string()
                        .email("Email is invalid")
                        .required("Email is required"),
                    password: Yup.string()
                        .required("Password is required")
                        .min(6, "Password must be at least 6 characters"),
                    confirmPassword: Yup.string()
                        .oneOf([Yup.ref("password"), null], "Passwords must match")
                        .required("Confirm Password is required")

                })}

            >
                {({handleReset}) => (
                    <Form>

                        <MyTextInput
                            label="Name"
                            name="name"

                        />
                        <MyTextInput
                            label="Email"
                            name="email"

                        />
                        <MyTextInput
                            label="Password"
                            name="password"
                            type="password"
                        
                        />
                        <MyTextInput
                            label="Confirm password"
                            name="confirmPassword"
                            type="password"
                        
                        />


                        <button>Create</button>
                        <button type="button" onClick={handleReset}>Cancel</button>
                    </Form>
                )
                }
            </Formik>




        </div>
    );
}

export default RegisterFormikPage
