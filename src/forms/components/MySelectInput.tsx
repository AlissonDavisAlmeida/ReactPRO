import { ErrorMessage, useField } from "formik";

interface MySelectInputProps {
    label: string;
    name: string;
    children: React.ReactNode;
    [key: string]: any;
}

export const MySelectInput = ({ label, children, ...props }: MySelectInputProps) => {

    const [field] = useField(props)

    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <select {...field} {...props}>
                {children}

            </select>
            <ErrorMessage name={props.name} component="span" />
        </>
    );
}

