import { useField } from "formik";

interface MyTextInputProps {
    label: string;
    name: string;
    type?: "text" | "email" | "password";
    placeholder?: string;
    [key: string]: any;
}

function MyTextInput({ label, ...props }: MyTextInputProps) {


    const [field, meta] = useField(props)

    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input className="text-input" {...field} {...props} />
            {
                meta.touched && meta.error && (
                    <span className="error">{meta.error}</span>
                )
            }
        </>
    );
}

export default MyTextInput;