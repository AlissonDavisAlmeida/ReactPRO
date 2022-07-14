import { useField } from "formik";

interface MySelectInputProps {
    label: string;
    name: string;
    [key: string]: any;
}

function MySelectInput({ label, ...props }: MySelectInputProps) {

    const [field, meta] = useField(props)

    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <select {...field} {...props}>
                

            </select>
            {
                meta.touched && meta.error && (
                    <span className="error">{meta.error}</span>
                )
            }
        </>
    );
}

export default MySelectInput;