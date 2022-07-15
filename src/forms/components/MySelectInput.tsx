import { ErrorMessage, useField } from "formik";

interface MySelectInputProps {
    label: string;
    name: string;
    [key: string]: any;
}

export const MySelectInput= ({ label, ...props }: MySelectInputProps)=> {

    const [field] = useField(props)

    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <select {...field} {...props}>
                

            </select>
            <ErrorMessage name={props.name} component="span"/>
        </>
    );
}

