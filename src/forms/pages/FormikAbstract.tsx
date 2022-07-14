import { Form, Formik } from "formik";
import "../styles/styles.css"
import * as Yup from "yup"
import MyTextInput from "../components/MyTextInput";
import MySelectInput from "../components/MySelectInput";
import MyCheckBoxInput from "../components/MyCheckboxInput";

function FormAbstract() {


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

                            <MyTextInput 
                                label="First Name" 
                                name="firstName"
                                type="text"
                                />

                            <MyTextInput
                                label="Last Name"
                                name="lastName"
                                type="text"


                                /> 

                            <MyTextInput
                                label="Email"
                                name="email"
                                type="email"
                                />       

                            
                            <MySelectInput label="Job Type" name="jobType" type="jobType" as="select">

                                <option value="developer">Developer</option>
                                <option value="developer">Developer</option>
                                <option value="developer">Developer</option>
                            </MySelectInput>

                            <MyCheckBoxInput 
                            
                                label="Accept Terms"
                                name="terms"
                                type="checkbox"
                            />


                            <button type="submit">Submit</button>
                        </Form>
                    )
                }

            </Formik>


        </div>
    );
}

export default FormAbstract;