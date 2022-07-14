import { useField } from "formik";

interface MyCheckBoxInputProps {
    label: string;
    name: string;
    [key: string]: any;
}

function MyCheckBoxInput({ label, ...props }: MyCheckBoxInputProps) {


    const [field, meta] = useField({...props, type: "checkbox"})

    return (
        <>
            <label>
                <input type="checkbox" {...field} {...props}/>
                {label}

            </label>
            {
                meta.touched && meta.error && (
                    <span className="error">{meta.error}</span>
                )
            }
        </>
    );
}

export default MyCheckBoxInput;