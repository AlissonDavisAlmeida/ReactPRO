import { useFormik } from "formik";
import "../styles/styles.css"
import * as Yup from "yup"

function FormikPage() {


    const form = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
        },
        onSubmit: values => {

            console.log(values);
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required("Required").max(15, "Must be 15 characters or less"),
            lastName: Yup.string().required("Required").max(10, "Must be 10 characters or less"),
            email: Yup.string().required("Required").email("Invalid email address"),
        })

    })

    return (
        <div>
            <h1>Formik</h1>
            <form onSubmit={form.handleSubmit}>

                <label htmlFor="firstName">First Name</label>
                <input
                    type="text"
                    {...form.getFieldProps("firstName")} />
                {form.touched.firstName && form.errors.firstName && <span>{form.errors.firstName}</span>}

                <label htmlFor="lastName">Last Name</label>
                <input
                    type="text"
                    {...form.getFieldProps("lastName")} />
                <span>{form.touched.lastName && form.errors.lastName && form.errors.lastName}</span>

                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    {...form.getFieldProps("email")} />
                {form.touched.email && form.errors.email && <span>{form.errors.email}</span>}

                <button>Submit</button>
            </form>

        </div>
    );
}

export default FormikPage;